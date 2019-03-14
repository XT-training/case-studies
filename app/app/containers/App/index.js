/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <header>
        <h1>DataTable App</h1>
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <GlobalStyle />
      </div>
      <footer>copyright information</footer>
    </React.Fragment>
  );
}
