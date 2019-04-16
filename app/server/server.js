import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import configureStore from '../app/configureStore';
import App from '../app/containers/App';

const render = (req, res) => {
  // Model the initial state
  const context = {};
  const store = configureStore();
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  return { content, preloadedState };
};

export default render;
