import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MoviePage from './MoviePage.jsx';
import ScreenSelectorPage from './ScreenSelectorPage.jsx';
import Header from './../common/Header.jsx';


const MovieScreeningPage = () => {
	return (
		<Fragment>
			<Header />
			<div className="section">
				<Route exact path="/movie-screening" component={MoviePage} />
				<Route path="/movie-screening/screen-time" component={ScreenSelectorPage} />
			</div>
		</Fragment>
	);
};

export default MovieScreeningPage;