import serviceLocator from '../services/serviceLocator';
import AjaxFactoryUtil from '../../app/utils/ajaxFactoryUtil';
import request from 'request';
import commonUtil from '../../app/utils/commonUtil';
import appConstants from '../../app/app-constants/app-constants';
import { ctrllog } from '../../debug';

const apiConfig = serviceLocator();

export default (req, res, next) => {
    const defaultReqURLObject = apiConfig.movie.default;
    const options = {
        method: defaultReqURLObject.method,
        url: `${defaultReqURLObject.url}?theatre=${req.params.id}`
    };

    AjaxFactoryUtil.triggerServerRequest(options)
        .then(value => {
            const responseData = value.body.data;
            res.send(responseData);
        })
        .catch(error => {
            res.send(commonUtils.sendError(error));
        });
};
