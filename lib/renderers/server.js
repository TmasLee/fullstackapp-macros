import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';
import fetch from 'node-fetch';

import serverStore from '../serverStore';
import App from 'components/Container/App';
import config from 'config';

const serverRender = async () => {
  // Unused variables --> just to be able to use await
  const allDays = await fetch(`http://${config.host}:${config.port}/alldays`);
  const allFoods = await fetch(`http://${config.host}:${config.port}/allfoods`);

  const preloadedState = serverStore.getState();

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <Provider store={serverStore}>
        <App />
      </Provider>
    ),
    preloadedState: preloadedState,
  }
};

export default serverRender;