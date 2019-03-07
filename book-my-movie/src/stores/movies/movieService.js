import axios from 'axios';
import { apiBaseUrl } from './../../config';
import { GetMovies } from './moviesAction';

export const getMovieList = (queryparams) => {
	const url = `${apiBaseUrl}/movie/filter`;
	return dispatch => {
		axios.get(url, {
			params: queryparams
		})
		.then(response => {
			dispatch(GetMovies(response.data));
		});
	};
};
