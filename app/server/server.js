import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../app/configureStore';
import App from '../app/containers/App';

const render = initialState => {
  // Model the initial state
  const store = configureStore(initialState);
  const content = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const preloadedState = store.getState();
  return { content, preloadedState };
};

export default render;
