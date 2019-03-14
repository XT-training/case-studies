import React from 'react';
import { Redirect } from 'react-router';
import Theater from './pages/theater/Theater';
import Screening from './pages/screening/Screening';
import ErrorPage from './pages/error-page/ErrorPage';
import { getTheaters } from './actions/theaterAction';
import { getMovies } from './actions/movieAction';
import App from './pages/App';
import Authentication from './containers/hoc/Authentication';
import appUrl from './app-constants/app-url';

const redirectToEn = () => <Redirect to={appUrl.HOME} />;

export default [
    {
        path: appUrl.ROOT,
        component: App,
        routes: [
            {
                path: '/',
                component: redirectToEn,
                exact: true,
                need: [getTheaters]
            },
            {
                path: appUrl.HOME,
                exact: true,
                component: Theater,
                need: [getTheaters]
            },
            {
                path: `${appUrl.SCREENING}/:id`,
                exact: true,
                component: Screening,
                need: [getMovies]
            },
            {
                path: '*',
                component: ErrorPage,
                exact: true
            }
        ]
    }
];
