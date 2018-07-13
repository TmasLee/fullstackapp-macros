'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var servings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var ServingsDropdown = function ServingsDropdown(_ref) {
  var getServings = _ref.getServings;

  return _react2.default.createElement(
    'div',
    null,
    'How many servings?',
    _react2.default.createElement(
      'select',
      { onChange: getServings },
      _react2.default.createElement(
        'option',
        { value: '0' },
        '-'
      ),
      servings.map(function (amt, index) {
        return _react2.default.createElement(
          'option',
          { key: index },
          amt
        );
      })
    )
  );
};

exports.default = ServingsDropdown;