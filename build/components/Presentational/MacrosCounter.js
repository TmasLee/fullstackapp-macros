'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MacrosCounter = function MacrosCounter(_ref) {
  var entryMacros = _ref.entryMacros;

  return _react2.default.createElement(
    'div',
    null,
    'Protein: ',
    entryMacros[1],
    'g, Fat: ',
    entryMacros[2],
    'g, Carbs: ',
    entryMacros[3],
    'g, Total Calories: ',
    entryMacros[0],
    ' cal'
  );
};

exports.default = MacrosCounter;