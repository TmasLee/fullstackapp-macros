import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'Reducers/index';

let logger = createLogger({
  predicate: (getState,action)=> action.type !== 'GET_DATE_TIME',
  collapsed: true
});

let serverStore = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    logger
  )
);

export default serverStore;