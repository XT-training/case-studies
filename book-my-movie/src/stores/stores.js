import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import settingsReducer from './settings/settingsReducer';
import { moviesListReducer, theatersReducer, theaterReducer } from './movies/movieReducer';

const reducer = combineReducers({
	settings: settingsReducer,
	movies: moviesListReducer,
	theaters: theatersReducer,
	theater: theaterReducer,
});
const middleware = [
	thunk
];
const store = createStore(
	reducer, 
	compose(
		applyMiddleware(...middleware),
		typeof window === 'object' &&
		typeof window.devToolsExtension !== 'undefined'
			? window.devToolsExtension()
			: f => f
	)
);

export default store;
