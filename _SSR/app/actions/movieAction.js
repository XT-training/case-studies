import AjaxFactoryUtil from 'utils/ajaxFactoryUtil';
import { MOVIE } from '../types';
import expressEndPointURL from '../app-constants/express-endpoint-url';
import appConstants from '../app-constants/app-constants';
import { actionlog } from '../../debug';

export const setMovies = data => ({
    type: MOVIE,
    data
});

export const getMovies = (params, url, headers, res) => {
    actionlog(`MOVIE_ACTION HOME-PAGE-DATA START URL = ${url}`);
    const options = {
        method: expressEndPointURL.MOVIE_FILTER.method,
        url: `${expressEndPointURL.MOVIE_FILTER.url}/${params.id}`
    };
    return dispatch =>
        AjaxFactoryUtil.triggerServerRequest(options)
            .then(value => {
                dispatch(setMovies(value.body.data));
                actionlog(`MOVIE_ACTION HOME-PAGE-DATA END, DATA = ${JSON.stringify(value)}`);
            })
            .catch(error => {
                actionlog(`HOMEPAGE DATA ERROR = ${error}`);
                actionlog('MOVIE_ACTION HOME-PAGE-DATA END');
            });
};
