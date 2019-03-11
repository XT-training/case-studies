import axios from 'axios';
import { apiBaseUrl } from './../../config';
import { GetMovies, GetTheaters } from './moviesAction';
import store from './../stores';

export const getMovieList = (queryparams) => {
	
	const state = store.getState();
	const theaterId = state.theater && state.theater._id;
	const url = `${apiBaseUrl}/movie/filter?theatre=${theaterId}`;
	return dispatch => {
		axios.get(url, {
			params: queryparams
		})
		.then(response => {
			dispatch(GetMovies(response.data));
		});
	};
};

export const getTheatersList = (queryparams) => {
	const url = `${apiBaseUrl}/theatre/filter`;
	return dispatch => {
		axios.get(url, {
			params: queryparams
		})
		.then(response => {
			dispatch(GetTheaters(response.data));
		});
	};
};
