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

var DayHistoryList = function DayHistoryList(_ref) {
  var allDays = _ref.allDays,
      handleClick = _ref.handleClick;

  return _react2.default.createElement(
    'ul',
    { style: style.list },
    _react2.default.createElement(
      'h3',
      null,
      'Macros History'
    ),
    allDays.map(function (day, i) {
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
              handleClick(day);
            }
          },
          new Date(day.createdAt).toLocaleString()
        ),
        _react2.default.createElement(
          'div',
          { style: style.details },
          'Total Calories: ',
          day.total_calories,
          ' | Total Carbs: ',
          day.total_carbs,
          ' | Total Protein: ',
          day.total_protein,
          ' | Total Fat: ',
          day.total_fat,
          _react2.default.createElement(
            'div',
            null,
            'Food History: -'
          )
        )
      );
    })
  );
};

exports.default = DayHistoryList;