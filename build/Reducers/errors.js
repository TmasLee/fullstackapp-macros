'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var defaultState = {
  errorMsg: ''
};

function errors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'FETCH_QUERY_RESULTS_FAILURE':
      return _extends({}, state, {
        errorMsg: action.data.msg
      });
    case 'FETCH_QUERY_RESULTS_SUCCESS':
      return _extends({}, state, {
        errorMsg: ''
      });
    case 'FETCH_FOOD_NUTRIENTS_FAILURE':
      return _extends({}, state, {
        errorMsg: action.data.msg
      });
    case 'FETCH_FOOD_NUTRIENTS_SUCCESS':
      return _extends({}, state, {
        errorMsg: ''
      });

    default:
      return state;
  }
}

exports.default = errors;