'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  // position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: 0,
  right: 0,
  textAlign: 'center'
};

var DatabaseDisplay = function DatabaseDisplay(props) {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      'svg',
      { width: '400', height: '110' },
      _react2.default.createElement('rect', { width: '400', height: '110' }),
      _react2.default.createElement(
        'text',
        { fill: '#44ffff', fontSize: '45', fontFamily: 'Verdana', x: '150', y: '96' },
        'Database'
      )
    )
  );
};

exports.default = DatabaseDisplay;