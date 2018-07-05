let defaultState = {
  allDays: [],
  allFoods: [],
  currentDay: null,
  date: new Date()
}

function app(state=defaultState, action){
  switch(action.type){
    case('POST_NEW_DAY'):
      return {
        ...state,
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
    case('GET_DATE_TIME'):
      return{
        ...state,
        date: action.data.date
      }
    case('GET_MOST_RECENT_DAY'):
      return{
        ...state,
        currentDay: action.data.currentDay
      }
    case('POST_FOOD_TO_DB'):
      return {
        ...state,
      }
    case('ADD_MACROS_TO_CURRENT'):
      return {
        ...state,
        currentDay: action.data.currentDay
      }
    default:
      return state;
  }
}

export default app;