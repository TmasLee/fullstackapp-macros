'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FoodLinkList = require('./FoodLinkList');

var _FoodLinkList2 = _interopRequireDefault(_FoodLinkList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FoodSearchBar = function FoodSearchBar(_ref) {
  var handleSearchBarChange = _ref.handleSearchBarChange,
      query = _ref.query,
      queryResults = _ref.queryResults,
      handleFoodLinkClick = _ref.handleFoodLinkClick;

  return _react2.default.createElement(
    'div',
    null,
    'Enter a food: ',
    _react2.default.createElement('input', { onChange: handleSearchBarChange, value: query }),
    _react2.default.createElement(_FoodLinkList2.default, { queryResults: queryResults, onLinkClick: handleFoodLinkClick })
  );
};

exports.default = FoodSearchBar;