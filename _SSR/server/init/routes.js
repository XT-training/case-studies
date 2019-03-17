import expressEndPointURL from '../../app/app-constants/express-endpoint-url';
// Controllers import
import TheatreController from '../controllers/theatreController';
import MovieController from '../controllers/movieController';

export default app => {
    // app.use(AuthController);

    app.get(expressEndPointURL.THEATRE.url, TheatreController);
    app.get(expressEndPointURL.MOVIE_FILTER.url, MovieController);
};
