'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _inputForm = require('./inputForm');

var _inputForm2 = _interopRequireDefault(_inputForm);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  errors: _errors2.default,
  inputForm: _inputForm2.default,
  app: _app2.default
});