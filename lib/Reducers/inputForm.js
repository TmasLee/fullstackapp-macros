let defaultState = {
  query: '',
  queryResults: [],
  foodMacros: [0,0,0,0],
  entryMacros: [0,0,0,0],
  servings: 0
};

function inputForm(state=defaultState, action){
  switch(action.type){
    case('CHANGE_QUERY'):
      return {
        ...state,
        query: action.data.newQuery
      }
    case('FETCH_QUERY_RESULTS_SUCCESS'):
      return {
        ...state,
        queryResults: action.data.queryResults
      }
    case('FETCH_FOOD_NUTRIENTS_SUCCESS'):
      return{
        ...state,
        foodMacros: action.data.foodMacros,
        query: action.data.newQuery,
        queryResults: []
      }
    case('FETCH_FOOD_NUTRIENTS_FAILURE'):
      return{
        ...state,
        queryResults: []
      }
    case('STORE_ENTRY_MACROS'):
      return {
        ...state,
        entryMacros: action.data.entryMacros
      }
    case('EMPTY_SEARCH'):
      return {
        ...state,
        newQuery: action.data.newQuery,
        queryResults: action.data.queryResults
      }
    case('GET_SERVINGS'):
      return {
        ...state,
        servings: action.data.servings,
      }
    default: 
      return state;
  }
}

export default inputForm;