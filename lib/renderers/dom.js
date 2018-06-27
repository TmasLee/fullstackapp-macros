import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'Reducers/index';

import App from 'components/Container/App';

let logger = createLogger({
  collapsed: true
});

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, logger)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);