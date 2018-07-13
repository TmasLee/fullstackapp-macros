'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultState = {
  allDays: [],
  allFoods: [],
  currentDay: null,
  date: new Date()
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'POST_NEW_DAY':
      return _extends({}, state);
    case 'GET_ALL_DAYS':
      return _extends({}, state, {
        allDays: action.data.allDays
      });
    case 'GET_ALL_FOODS':
      return _extends({}, state, {
        allFoods: action.data.allFoods
      });
    case 'CREATE_NEW_DAY':
      return _extends({}, state, {
        currentDay: action.data.currentDay
      });
    case 'GET_DATE_TIME':
      return _extends({}, state, {
        date: action.data.date
      });
    case 'GET_MOST_RECENT_DAY':
      return _extends({}, state, {
        currentDay: action.data.currentDay
      });
    case 'POST_FOOD_TO_DB':
      return _extends({}, state);
    case 'ADD_MACROS_TO_CURRENT':
      return _extends({}, state, {
        currentDay: action.data.currentDay
      });
    default:
      return state;
  }
}

exports.default = app;