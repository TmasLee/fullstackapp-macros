import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';

import serverStore from '../serverStore';
import App from 'components/Container/App';
import * as appActions from '../Actions/appActions';

const serverRender = async () => {
  serverStore.dispatch(appActions.getAllDays());
  // serverStore.dispatch(appActions.getAllFoods());

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

// import fetch from 'node-fetch';
// import config from 'config';
  // await fetch(`http://${config.host}:${config.port}/alldays`);
  // await fetch(`http://${config.host}:${config.port}/allfoods`);