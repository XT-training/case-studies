const {
    movieCreate,
    movieEdit,
    movieDelete,
    movieFilter
} = require('../controllers/movieController');
const {
    theatreCreate,
    hallCreate,
    theatreEdit,
    theatreDelete,
    hallDelete,
    theatreFilter,
    hallFilter
} = require('../controllers/theatreController');
const {
    eventCreate,
    eventEdit,
    eventDelete,
    eventFilter,
    eventPopulatedFilter,
    dateFilter
} = require('../controllers/eventController');
const {
    cinemaFilter
} = require('../controllers/cinemaController');
const apiURL = '/api/v1';

module.exports = function(app) {

    /* theatre REST API */
    app.post(`${apiURL}/theatre/create`, theatreCreate);
    app.patch(`${apiURL}/theatre/edit/:id`, theatreEdit);
    app.delete(`${apiURL}/theatre/delete/:id`, theatreDelete);
    app.get(`${apiURL}/theatre/filter`, theatreFilter);
    app.post(`${apiURL}/theatre/audi/create`, hallCreate);
    app.delete(`${apiURL}/theatre/audi/delete/:id`, hallDelete);
    app.get(`${apiURL}/theatre/audi/filter/:id`, hallFilter);

    /* movie REST API */
    app.post(`${apiURL}/movie/create`, movieCreate);
    app.get(`${apiURL}/movie/edit`, movieEdit);
    app.delete(`${apiURL}/movie/delete/:id`, movieDelete);
    app.get(`${apiURL}/movie/filter`, movieFilter);

    /* event REST API */
    app.post(`${apiURL}/event/create`, eventCreate);
    app.get(`${apiURL}/event/edit`, eventEdit);
    app.delete(`${apiURL}/event/delete/:id`, eventDelete);
    app.get(`${apiURL}/event/populate/filter`, eventPopulatedFilter);
    app.get(`${apiURL}/event/filter`, eventFilter);
    app.get(`${apiURL}/date/filter`, dateFilter);
    
    /* global REST API */
    app.get(`${apiURL}/cinema/filter`, cinemaFilter);

};