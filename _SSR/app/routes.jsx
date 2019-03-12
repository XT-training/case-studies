import React from 'react';
import { Redirect } from 'react-router';
import HomePage from './pages/home/HomePage';
import Aboutus from './pages/about-us/Aboutus';
import ErrorPage from './pages/error-page/ErrorPage';
import { getHomePageData } from './actions/homePageAction';
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
                need: [getHomePageData]
            },
            {
                path: appUrl.HOME,
                exact: true,
                component: HomePage,
                need: [getHomePageData]
            },
            {
                path: appUrl.ABOUT,
                component: Authentication(Aboutus), // Example of authentication....
                exact: true,
                need: [getHomePageData]
            },
            {
                path: '*',
                component: ErrorPage,
                exact: true
            }
        ]
    }
];
