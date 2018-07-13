'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  display: 'absolute',
  float: 'right'
  // right: '0',
};

var ApiDisplay = function ApiDisplay(props) {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      'svg',
      { width: '200', height: '100' },
      _react2.default.createElement('rect', { width: '200', height: '100' }),
      _react2.default.createElement(
        'text',
        { fill: '#44ffff', fontSize: '35', fontFamily: 'Verdana', x: '100', y: '96' },
        'Api'
      )
    )
  );
};

exports.default = ApiDisplay;