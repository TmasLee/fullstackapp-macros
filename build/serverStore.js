'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('Reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
  predicate: function predicate(getState, action) {
    return action.type !== 'GET_DATE_TIME';
  },
  collapsed: true
});

var serverStore = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));

exports.default = serverStore;