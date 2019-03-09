import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {IntlProvider} from "react-intl";
import store from './stores/stores';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import en from './locale/en.json';
import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<IntlProvider locale="en" messages={en}>
			<App />
		</IntlProvider>
	</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
