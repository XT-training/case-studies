import expressEndPointURL from '../../app/app-constants/express-endpoint-url';
// Controllers import
import TheatreController from '../controllers/theatreController';

export default (app) => {
    // app.use(AuthController);

    app.get(expressEndPointURL.THEATRE.url, TheatreController);
};
