import React from 'react';
import PropTypes from 'prop-types';
import commonUtil from '../../utils/commonUtil';
import { Link } from 'react-router-dom';

const Theater = ({ theater, onSelectTheater }) => {
    const { theatreName, theatreAddress } = theater;

    return (
        <div className="theater">
            <div className="theater__name">{theatreName}</div>
            <div className="theater__address">{theatreAddress}</div>
        </div>
    );
};

Theater.propTypes = {
    theater: PropTypes.object,
    onSelectTheater: PropTypes.func
};

const generatetheaters = props => {
    const { theaters } = props;
    const theaterList =
        theaters &&
        theaters.map(theater => (
            <Theater theater={theater} key={theater._id} />
        ));

    return theaterList;
};

const TheaterContainer = props => (
    <div className="theater-container container">{generatetheaters(props)}</div>
);

export default TheaterContainer;
