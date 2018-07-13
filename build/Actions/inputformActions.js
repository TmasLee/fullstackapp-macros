'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeQuery = changeQuery;
exports.fetchQueryResults = fetchQueryResults;
exports.fetchFoodNutrition = fetchFoodNutrition;
exports.getServings = getServings;
exports.storeEntryMacros = storeEntryMacros;
exports.resetForm = resetForm;

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function changeQuery(newQuery) {
  return {
    type: 'CHANGE_QUERY',
    data: { newQuery: newQuery }
  };
}

function fetchQueryResults(newQuery) {
  if (newQuery === '') {
    return {
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0, 0, 0, 0],
        entryMacros: [0, 0, 0, 0],
        servings: 0
      }
    };
  }
  return function (dispatch) {
    callFetchQueryResults(newQuery, dispatch);
  };
}

function _callFetchQueryResults(newQuery, dispatch) {
  (0, _nodeFetch2.default)('https://api.nal.usda.gov/ndb/search/?format=json&q=' + newQuery + '&sort=r&max=25&offset=0&api_key=CCtsOjtZgln55mNRzRZLgwMQbU7iMHf4lw9FOGEE').then(function (response) {
    return response.json();
  }).then(function (response) {
    if (response.errors) {
      throw Error(response.errors);
    };
    dispatch({
      type: 'FETCH_QUERY_RESULTS_SUCCESS',
      data: { queryResults: response.list.item }
    });
  }).catch(function (error) {
    var msg = 'Food not found.';
    dispatch({
      type: 'FETCH_QUERY_RESULTS_FAILURE',
      data: { msg: msg }
    });
  });
}

var callFetchQueryResults = (0, _lodash2.default)(_callFetchQueryResults, 300);

function fetchFoodNutrition(id, name) {
  return function (dispatch) {
    (0, _nodeFetch2.default)('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=CCtsOjtZgln55mNRzRZLgwMQbU7iMHf4lw9FOGEE&nutrients=203&nutrients=204&nutrients=205&nutrients=208&ndbno=' + id).then(function (response) {
      return response.json();
    }).then(function (response) {
      var nutrients = response.report.foods['0'].nutrients.map(function (nutrient) {
        if (nutrient.value === '--') {
          return '0.00';
        }
        return nutrient.value;
      });
      dispatch({
        type: 'FETCH_FOOD_NUTRIENTS_SUCCESS',
        data: {
          foodMacros: nutrients,
          newQuery: name
        }
      });
    }).catch(function (error) {
      var msg = 'Something went wrong.';
      dispatch({
        type: 'FETCH_FOOD_NUTRIENTS_FAILURE',
        data: { msg: msg }
      });
    });
  };
}

function getServings(servings) {
  return {
    type: 'GET_SERVINGS',
    data: { servings: servings }
  };
}

function storeEntryMacros(entryMacros) {
  return {
    type: 'STORE_ENTRY_MACROS',
    data: { entryMacros: entryMacros }
  };
}

function resetForm() {
  return {
    type: 'RESET_FORM',
    data: {
      newQuery: '',
      queryResults: [],
      foodMacros: [0, 0, 0, 0],
      entryMacros: [0, 0, 0, 0],
      servings: 0
    }
  };
}