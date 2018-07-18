import debounce from 'lodash.debounce';
import fetch from 'node-fetch';

export function changeQuery(newQuery){
  return {
    type: 'CHANGE_QUERY',
    data: {newQuery: newQuery}
  }
}

export function fetchQueryResults(newQuery){
  if (newQuery === ''){
    return {
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0,0,0,0,0],
        entryMacros: [0,0,0,0,0],
        servings: 0
      }
    }
  }
  return (dispatch)=>{
    callFetchQueryResults(newQuery, dispatch);
  }
}

function _callFetchQueryResults(newQuery, dispatch){
  fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${newQuery}&sort=r&max=25&offset=0&api_key=CCtsOjtZgln55mNRzRZLgwMQbU7iMHf4lw9FOGEE`)
  .then(response => response.json())    
  .then(response => {
    if (response.errors){
      throw Error(response.errors)
    };
    dispatch({
      type: 'FETCH_QUERY_RESULTS_SUCCESS',
      data: {queryResults: response.list.item}
    });
  })
  .catch((error)=> {
    let msg = 'Food not found.';
    dispatch({
      type: 'FETCH_QUERY_RESULTS_FAILURE',
      data: {msg: msg}
    });
  });
}

let callFetchQueryResults = debounce(_callFetchQueryResults, 300);

export function fetchFoodNutrition(id, name){
  return (dispatch)=>{
    fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=CCtsOjtZgln55mNRzRZLgwMQbU7iMHf4lw9FOGEE&nutrients=203&nutrients=204&nutrients=205&nutrients=208&ndbno=${id}`)
    .then(response => response.json())
    .then(response => {
      let nutrients = response.report.foods['0'].nutrients.map((nutrient)=>{
        if (nutrient.value === '--'){
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
    })
    .catch((error)=>{
      let msg= 'Something went wrong.';
      dispatch({
        type: 'FETCH_FOOD_NUTRIENTS_FAILURE',
        data: {msg: msg}
      })
    });
  }
}

export function getServings(servings){
  return {
    type: 'GET_SERVINGS',
    data: {servings: servings}
  }
}

export function storeEntryMacros(entryMacros){
  return{
    type: 'STORE_ENTRY_MACROS',
    data: {entryMacros: entryMacros}
  }
}

export function resetForm(){
  return {
    type: 'RESET_FORM',
    data: {
      newQuery: '',
      queryResults: [],
      foodMacros: [0,0,0,0,0],
      entryMacros: [0,0,0,0,0],
      servings: 0
    }
  }
}