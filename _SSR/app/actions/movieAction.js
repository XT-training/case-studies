import AjaxFactoryUtil from 'utils/ajaxFactoryUtil';
import { MOVIE, ACTIVE_MOVIE } from '../types';
import expressEndPointURL from '../app-constants/express-endpoint-url';
import appConstants from '../app-constants/app-constants';
import { setActiveTheater } from './theaterAction';
import { actionlog } from '../../debug';

export const setMovies = data => ({
    type: MOVIE,
    data
});
export const setActiveMovie = data => ({
    type: ACTIVE_MOVIE,
    data
});

export const searchMovies = (theaterId, searchTerm) => {
    const options = {
        method: expressEndPointURL.MOVIE_FILTER.method,
        url: `${
            expressEndPointURL.MOVIE_FILTER.url
        }?theater=${theaterId}&search=${searchTerm}`
    };
    return dispatch =>
        AjaxFactoryUtil.triggerServerRequest(options)
            .then(value => {
                dispatch(setMovies(value.body.data));
                actionlog(`MOVIE_ACTION SEARCH END, DATA = ${JSON.stringify(value)}`);
            })
            .catch(error => {
                actionlog(`HOMEPAGE DATA ERROR = ${error}`);
                actionlog('MOVIE_ACTION SEARCH END');
            });
};

export const getMovies = (params, url, headers, res) => {
    actionlog(`MOVIE_ACTION HOME-PAGE-DATA START URL = ${url}`);
    const options = {
        method: expressEndPointURL.MOVIE_FILTER.method,
        url: `${expressEndPointURL.MOVIE_FILTER.url}?theater=${params.id}`
    };
    return dispatch =>
        AjaxFactoryUtil.triggerServerRequest(options)
            .then(value => {
                dispatch(setMovies(value.body.data));
                dispatch(setActiveTheater(params.id));
                actionlog(`MOVIE_ACTION DATA END, DATA = ${JSON.stringify(value)}`);
            })
            .catch(error => {
                actionlog(`HOMEPAGE DATA ERROR = ${error}`);
                actionlog('MOVIE_ACTION DATA END');
            });
};
