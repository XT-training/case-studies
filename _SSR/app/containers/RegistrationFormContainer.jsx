import React from 'react';
import PropTypes from 'prop-types';
import ServerErrors from '../components/errors/server-errors/index';

const RegistrationFormContainer = ({ children }) => <div>{children}</div>;

RegistrationFormContainer.propTypes = {
    children: PropTypes.object
};

export default RegistrationFormContainer;
