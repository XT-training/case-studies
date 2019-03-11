import { GET_MOVIES, GET_THEATER, SET_THEATER } from './movieConstant';

export const GetMovies = (movies) => ({
	type: GET_MOVIES,
	movies
});

export const GetTheaters = (theaters) => ({
	type: GET_THEATER,
	theaters,
});

export const SetTheater = theater => ({
	type: SET_THEATER,
	theater,
});
