'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmitBtn = function SubmitBtn(_ref) {
  var handleSubmitBtn = _ref.handleSubmitBtn;

  return _react2.default.createElement(
    'button',
    { onClick: handleSubmitBtn },
    'Enter to Database'
  );
};

exports.default = SubmitBtn;