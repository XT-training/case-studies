import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TheaterPage from './containers/TheaterPageContainer.js';
import MovieScreeningPage from './components/pages/MovieScreeningPage.jsx';
// import MovieDetailPageContainer from './containers/MovieDetailPageContainer.js';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact={true} path="/" component={TheaterPage} />
          <Route path="/movie-screening" component={MovieScreeningPage} />
        </div>
      </Router>
    );
  }
}

export default App;
