import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const App = props => (
    <div className="app-container">{renderRoutes(props.route.routes)}</div>
);

App.propTypes = {
    children: PropTypes.object
};

export default App;
