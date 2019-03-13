import React from 'react';
import PropTypes from 'prop-types';

const Theater = ({ theater, onSelectTheater }) => {
    const { theatreName, theatreAddress } = theater;

    return (
        <div className="theater">
            <div className="name">{theatreName}</div>
            <div className="address">{theatreAddress}</div>
        </div>
    );
};

Theater.propTypes = {
    theater: PropTypes.object,
    onSelectTheater: PropTypes.func
};

export default Theater;
