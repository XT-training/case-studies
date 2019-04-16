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

import Login from '../User/Loadable';
import HomePage from '../HomePage/Loadable';
import Header from '../Header/Header';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className="container">
      <Header />
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
