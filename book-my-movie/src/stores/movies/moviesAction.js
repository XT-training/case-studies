import { GET_MOVIES } from './movieConstant';

export const GetMovies = (movies) => ({
	type: GET_MOVIES,
	movies
});
