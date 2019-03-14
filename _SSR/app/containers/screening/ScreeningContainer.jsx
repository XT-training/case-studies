import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import commonUtil from '../../utils/commonUtil';

const rootClass = 'screening-list';

const Screen = ({ movie }) => {
    const { moviePoster, movieName } = movie;
    const timings = ['09:00AM', '01:00PM', '02:30PM', '07:30PM', '10:30PM'].map((time, idx) => (
        <span className="time" key={idx}>
            {time}
        </span>
    ));

    return (
        <div className={`${rootClass}__list__item`}>
            <div className={`${rootClass}__list__item__poster`}>
                <img
                    className="img-responsive"
                    src={moviePoster}
                    alt={movieName}
                />
            </div>
            <div className={`${rootClass}__list__item__desc`}>
                <div className={`${rootClass}__list__item__desc__name`}>
                    {movieName}
                </div>
                <div className={`${rootClass}__list__item__desc__timing`}>
                    {timings}
                </div>
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
        <div className={rootClass}>
            <div className={`${rootClass}__search-result`}>
                <FormattedMessage
                    id="search.screens"
                    values={{ screens: movies.length }}
                />
            </div>
            <div className={`${rootClass}__list`}>{moviesList}</div>
        </div>
    );
};

ScreeningContainer.propTypes = {
    movies: PropTypes.array
};

export default ScreeningContainer;
