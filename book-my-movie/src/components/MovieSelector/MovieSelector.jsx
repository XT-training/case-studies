import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link, Redirect } from 'react-router-dom'
import Search from './Search.jsx';
import './MovieSelector.scss';

const rootClass = 'movie-selector';

const ResultDisplay = ({ result })=> {
	return (
		<div className={`${rootClass}__result-display`}>
			<FormattedMessage id="search.titles" values={{search: result}} />
		</div>
	);
};

ResultDisplay.propTypes = {
	result: PropTypes.number,
}; 

const MoviePoster = ({ movie }) => {
	const nodeClass = `${rootClass}__movie`;
	const { moviePoster, movieName, _id } = movie;

	return (
		<div className={`${nodeClass} col-6`}>
			<Link to={`movie/${movie._id}`} className={`${nodeClass}__item `}>
				<img src={moviePoster} className={`img-responsive ${nodeClass}__item__img`} alt={movieName}></img>
				<div className={`${nodeClass}__item__title`}>{movieName}</div>
			</Link>
		</div>
	);
};

MoviePoster.propTypes = {
	movie: PropTypes.object,
}

class MovieSelector extends Component {
	static propTypes = {
		movies: PropTypes.array,
	};

	componentDidMount() {
		this.props.getMovieList();
	}

	renderMovies() {
		const { movies } = this.props;
		const movieList = movies.map(movie => {
			return (
				<React.Fragment key={movie._id}>
					<MoviePoster movie={movie} />
				</React.Fragment>
			);
		});

		return (
			<React.Fragment>
				{movieList}
			</React.Fragment>
		)
	}

	render() {
		const { movies, theater } = this.props;
		if(!theater._id){
			return <Redirect to="/" />;
		}

		return (
			<div className={rootClass}>
				<ResultDisplay result={movies.length} />
				<Search />
				<div className={`${rootClass}__grid row`}>
					{this.renderMovies()}
				</div>
			</div>
		);
	}
}

export default MovieSelector;