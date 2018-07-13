'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultState = {
  query: '',
  queryResults: [],
  foodMacros: [0, 0, 0, 0],
  entryMacros: [0, 0, 0, 0],
  servings: 0
};

function inputForm() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_QUERY':
      return _extends({}, state, {
        query: action.data.newQuery
      });
    case 'FETCH_QUERY_RESULTS_SUCCESS':
      return _extends({}, state, {
        queryResults: action.data.queryResults
      });
    case 'FETCH_FOOD_NUTRIENTS_SUCCESS':
      return _extends({}, state, {
        foodMacros: action.data.foodMacros,
        query: action.data.newQuery,
        queryResults: []
      });
    case 'FETCH_FOOD_NUTRIENTS_FAILURE':
      return _extends({}, state, {
        queryResults: []
      });
    case 'STORE_ENTRY_MACROS':
      return _extends({}, state, {
        entryMacros: action.data.entryMacros
      });
    case 'GET_SERVINGS':
      return _extends({}, state, {
        servings: action.data.servings
      });
    case 'RESET_FORM':
      return _extends({}, state, {
        query: action.data.newQuery,
        queryResults: action.data.queryResults,
        foodMacros: action.data.foodMacros,
        entryMacros: action.data.entryMacros,
        servings: action.data.servings
      });
    default:
      return state;
  }
}

exports.default = inputForm;