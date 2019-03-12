import AjaxFactoryUtil from 'utils/ajaxFactoryUtil';
import { HOME_PAGE, HOME_PAGE_TEST } from '../types';
import expressEndPointURL from '../app-constants/express-endpoint-url';
import appConstants from '../app-constants/app-constants';
import { actionlog } from '../../debug';


export const setHomePageData = data => ({
    type: HOME_PAGE,
    data
});

export const getHomePageData = (params, url, headers, res) => {
    actionlog(`HOME_PAGE_ACTION HOME-PAGE-DATA START URL = ${url}`);
    const options = {
        method: expressEndPointURL.THEATRE.method,
        url: expressEndPointURL.THEATRE.url,
    };

    return dispatch =>
        AjaxFactoryUtil.triggerServerRequest(options)
            .then(value => {
                console.log(value.body)
                dispatch(setHomePageData(value.body.data));
                actionlog(`HOME_PAGE_ACTION HOME-PAGE-DATA END, DATA = ${JSON.stringify(value)}`);
            })
            .catch(error => {
                actionlog(`HOMEPAGE DATA ERROR = ${error}`);
                actionlog('HOME_PAGE_ACTION HOME-PAGE-DATA END');
            });
};
