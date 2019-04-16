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
import Login from 'containers/User/Login';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="container">
      <header className="container mb-1">
        <nav className="navbar navbar-light bg-light px-0">
          <a className="navbar-brand" href="/">
            <img
              src="/table-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top  mr-2"
              alt=""
            />
            DataTable App
          </a>
        </nav>
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
        <GlobalStyle />
      </div>
      {/* <QuickView /> */}
      <footer className="container">copyright information</footer>
    </div>
  );
}
