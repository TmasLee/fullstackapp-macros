'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FoodLink = require('./FoodLink');

var _FoodLink2 = _interopRequireDefault(_FoodLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  position: 'absolute',
  background: 'rgba(255,255,255,1)',
  minWidth: '400px',
  maxWidth: '500px',
  textAlign: 'center',
  border: '1px solid black',
  zIndex: '9999'
};

var FoodLinkList = function FoodLinkList(_ref) {
  var queryResults = _ref.queryResults,
      onLinkClick = _ref.onLinkClick;

  return _react2.default.createElement(
    'div',
    { style: style },
    queryResults.map(function (result, index) {
      return _react2.default.createElement(_FoodLink2.default, _extends({
        key: index
      }, result, {
        onClick: onLinkClick }));
    })
  );
};

exports.default = FoodLinkList;