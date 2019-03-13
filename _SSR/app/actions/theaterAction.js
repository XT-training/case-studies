import AjaxFactoryUtil from 'utils/ajaxFactoryUtil';
import { HOME_PAGE } from '../types';
import expressEndPointURL from '../app-constants/express-endpoint-url';
import appConstants from '../app-constants/app-constants';
import { actionlog } from '../../debug';

export const setTheaters = data => ({
    type: HOME_PAGE,
    data
});

export const getTheaters = (params, url, headers, res) => {
    actionlog(`HOME_PAGE_ACTION HOME-PAGE-DATA START URL = ${url}`);
    const options = {
        method: expressEndPointURL.THEATRE.method,
        url: expressEndPointURL.THEATRE.url
    };

    return dispatch =>
        AjaxFactoryUtil.triggerServerRequest(options)
            .then(value => {
                dispatch(setTheaters(value.body.data));
                actionlog(`HOME_PAGE_ACTION HOME-PAGE-DATA END, DATA = ${JSON.stringify(value)}`);
            })
            .catch(error => {
                actionlog(`HOMEPAGE DATA ERROR = ${error}`);
                actionlog('HOME_PAGE_ACTION HOME-PAGE-DATA END');
            });
};
