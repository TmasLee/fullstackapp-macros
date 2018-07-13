'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('Reducers/index');

var _index2 = _interopRequireDefault(_index);

var _App = require('components/Container/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger.createLogger)({
  predicate: function predicate(getState, action) {
    return action.type !== 'GET_DATE_TIME';
  },
  collapsed: true
});

var preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

var store = (0, _redux.createStore)(_index2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));

_reactDom2.default.hydrate(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));