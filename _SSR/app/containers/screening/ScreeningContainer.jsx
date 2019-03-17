import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import appUrl from '../../app-constants/app-url';
import { FormattedMessage } from 'react-intl';

const Screen = ({ movie }) => {
    const { moviePoster, movieName, _id } = movie;

    return (
        <div className="item col-6">
            <div className="poster">
                <Link to={`${appUrl.MOVIE_DETAILS}/${_id}`}>
                    <img
                        className="img-responsive"
                        src={moviePoster}
                        alt={movieName}
                    />
                </Link>
            </div>
            <div className="desc">
                <div className="name">{movieName}</div>
            </div>
        </div>
    );
};

const ScreeningContainer = ({ movies }) => {
    if (!movies.length) return null;
    const moviesList = movies.map(movie => (
        <Screen movie={movie} key={movie._id} />
    ));

    return (
        <div className="result-container container">
            <div className="search-result">
                <FormattedMessage
                    id="search.screens"
                    values={{ screens: movies.length }}
                />
            </div>
            <div className="list-container row">{moviesList}</div>
        </div>
    );
};

ScreeningContainer.propTypes = {
    movies: PropTypes.array
};

export default ScreeningContainer;
