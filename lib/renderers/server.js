import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Provider} from 'react-redux';

import serverStore from '../serverStore';
import App from 'components/Container/App';
import * as appActions from '../Actions/appActions';

const serverRender = async () => {
  await serverStore.dispatch(appActions.getAllDays());
  await serverStore.dispatch(appActions.getAllFoods());

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