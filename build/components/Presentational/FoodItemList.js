'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  list: {
    listStyleType: 'none'
  },
  link: {
    textDecoration: 'none'
  },
  details: {
    border: '1px solid black',
    display: 'inline-block',
    textAlign: 'center',
    width: '95%'
  }
};

var FoodItemList = function FoodItemList(_ref) {
  var allFoods = _ref.allFoods,
      handleQuickAdd = _ref.handleQuickAdd;

  return _react2.default.createElement(
    'ul',
    { style: style.list },
    _react2.default.createElement(
      'h3',
      null,
      'Foods History'
    ),
    allFoods.map(function (food, i) {
      return _react2.default.createElement(
        'li',
        { key: i },
        _react2.default.createElement(
          'a',
          {
            href: '',
            style: style.link,
            onClick: function onClick(e) {
              e.preventDefault();
              handleQuickAdd(food);
            }
          },
          food.name
        ),
        _react2.default.createElement(
          'div',
          { style: style.details },
          'Calories: ',
          food.calories,
          ' | Carbs: ',
          food.carbs,
          ' | Protein: ',
          food.protein,
          ' | Fat: ',
          food.fat,
          ' |',
          new Date(food.createdAt).toLocaleString()
        )
      );
    })
  );
};

exports.default = FoodItemList;