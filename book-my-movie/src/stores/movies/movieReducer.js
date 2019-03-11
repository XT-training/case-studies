import { GET_MOVIES, GET_THEATER, SET_THEATER } from './movieConstant';

export const moviesListReducer = (initialState = [], action) => {
	switch(action.type) {
		case GET_MOVIES:
			return (typeof action.movies === 'object' ? action.movies: initialState);
		
		default:
			return initialState;
	};
};

export const theatersReducer = (initialState=[], action) => {
	switch(action.type) {
		case GET_THEATER:
			return action.theaters;

		default:
			return initialState;
	}
};

export const theaterReducer = (initialState= {}, action) => {
	switch(action.type) {
		case SET_THEATER:
			return Object.assign({}, initialState, action.theater);
		default:
			return initialState;
	};
}
