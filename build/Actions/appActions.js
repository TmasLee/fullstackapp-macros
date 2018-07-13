'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewDay = createNewDay;
exports.postNewDay = postNewDay;
exports.getDateTime = getDateTime;
exports.getMostRecentDay = getMostRecentDay;
exports.getAllDays = getAllDays;
exports.getAllFoods = getAllFoods;
exports.addMacrosToCurrent = addMacrosToCurrent;
exports.postFood = postFood;

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNewDay(newDay) {
  return {
    type: 'CREATE_NEW_DAY',
    data: { currentDay: newDay }
  };
}

function postNewDay() {
  return function (dispatch) {
    (0, _nodeFetch2.default)('/post_day_entry', {
      method: 'POST'
    }).then(function () {
      dispatch({
        type: 'POST_NEW_DAY'
      });
    }).catch(function (err) {
      console.error(err);
    });
  };
}

function getDateTime() {
  (0, _nodeFetch2.default)('/getdatetime').catch(function (err) {
    console.error(err);
  });
  return {
    type: 'GET_DATE_TIME',
    data: { date: new Date() }
  };
}

function getMostRecentDay() {
  return function (dispatch) {
    (0, _nodeFetch2.default)('http://' + _config2.default.host + ':' + _config2.default.port + '/getmostrecentday').then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch({
        type: 'GET_MOST_RECENT_DAY',
        data: { currentDay: res }
      });
    }).catch(function (err) {
      console.error(err);
    });
  };
}

function getAllDays() {
  return function (dispatch) {
    (0, _nodeFetch2.default)('http://' + _config2.default.host + ':' + _config2.default.port + '/alldays').then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch({
        type: 'GET_ALL_DAYS',
        data: { allDays: res }
      });
    }).catch(function (err) {
      console.error(err);
    });
  };
}

function getAllFoods() {
  return function (dispatch) {
    (0, _nodeFetch2.default)('http://' + _config2.default.host + ':' + _config2.default.port + '/allfoods').then(function (res) {
      return res.json();
    }).then(function (res) {
      dispatch({
        type: 'GET_ALL_FOODS',
        data: { allFoods: res }
      });
    }).catch(function (err) {
      console.error(err);
    });
  };
}

function addMacrosToCurrent(macros, id) {
  return function (dispatch) {
    (0, _nodeFetch2.default)('http://' + _config2.default.host + ':' + _config2.default.port + '/addMacrosToCurrent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ macros: macros, id: id })
    }).then(function (res) {
      dispatch({
        type: 'ADD_MACROS_TO_CURRENT',
        data: { currentDay: res }
      });
    });
    dispatch({
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0, 0, 0, 0],
        entryMacros: [0, 0, 0, 0],
        servings: 0
      }
    });
  };
}

function postFood(foodEntry) {
  console.log(foodEntry);
  return function (dispatch) {
    (0, _nodeFetch2.default)('http://' + _config2.default.host + ':' + _config2.default.port + '/post_food_entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodEntry)
    }).then(function () {
      dispatch({
        type: 'POST_FOOD_TO_DB'
      });
    }).catch(function (err) {
      console.error(err);
    });
    dispatch({
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0, 0, 0, 0],
        entryMacros: [0, 0, 0, 0],
        servings: 0
      }
    });
  };
}