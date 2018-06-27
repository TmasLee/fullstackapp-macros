let defaultState = {
  allDays: [],
  allFoods: [],
  currentDay: null,
}

function app(state=defaultState, action){
  switch(action.type){
    case('ADD_NEW_DAY'):
      return {
        ...state,
        currentDay: action.data.currentDay
      }
    case('GET_ALL_DAYS'):
      return {
        ...state,
        allDays: action.data.allDays
      }
    case('GET_ALL_FOODS'):
      return {
        ...state,
        allFoods: action.data.allFoods
      }
    case('CREATE_NEW_DAY'):
      return{
        ...state,
        currentDay: action.data.currentDay
      }
    default:
      return state;
  }
}

export default app;