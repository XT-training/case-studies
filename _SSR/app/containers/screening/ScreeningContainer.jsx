import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import commonUtil from '../../utils/commonUtil';

const Screen = ({ movie }) => {
    const { moviePoster, movieName } = movie;
    const timings = ['09:00AM', '01:00PM', '02:30PM', '07:30PM', '10:30PM'].map((time, idx) => (
        <span className="time" key={idx}>
            {time}
        </span>
    ));

    return (
        <div className="item col-md-6">
            <div className="poster">
                <img
                    className="img-responsive"
                    src={moviePoster}
                    alt={movieName}
                />
            </div>
            <div className="desc">
                <div className="name">{movieName}</div>
                <div className="timing">{timings}</div>
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
            <div className="list-container">{moviesList}</div>
        </div>
    );
};

ScreeningContainer.propTypes = {
    movies: PropTypes.array
};

export default ScreeningContainer;
