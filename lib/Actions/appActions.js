import fetch from 'node-fetch';
import config from '../config';

export function createNewDay(newDay){
  return {
    type: 'CREATE_NEW_DAY',
    data: {currentDay: newDay}
  }
}

export function postNewDay(){
  return (dispatch)=>{
    fetch(`/post_day_entry`, {
      method: 'POST'
    })
    .then(()=>{
      dispatch ({
        type: 'POST_NEW_DAY',
      });
    })
    .catch((err)=> {
      console.error(err);
    });
  }
}

export function getDateTime(){
  fetch('/getdatetime')
  .catch((err)=>{
    console.error(err);
  });
  return {
    type: 'GET_DATE_TIME',
    data: {date: new Date()}
  }
}

export function getMostRecentDay(){
  return (dispatch)=>{
    fetch(`http://${config.host}:${config.port}/getmostrecentday`)
    .then((res)=> res.json())
    .then((res)=>{
      dispatch({
        type: 'GET_MOST_RECENT_DAY',
        data: {currentDay: res}
      });
    })
    .catch((err)=>{
      console.error(err);
    });
  }
}

export function getAllDays(){
  return (dispatch)=>{
    fetch(`http://${config.host}:${config.port}/alldays`)
    .then((res)=> res.json())
    .then((res) =>{
      dispatch({
        type: 'GET_ALL_DAYS',
        data: {allDays: res}
      });
    })
    .catch((err)=>{
      console.error(err);
    });
  }
}

export function getAllFoods(){
  return (dispatch)=>{
    fetch(`http://${config.host}:${config.port}/allfoods`)
    .then((res)=> res.json())
    .then((res)=>{
      dispatch({
        type: 'GET_ALL_FOODS',
        data: {allFoods: res}
      });
    })
    .catch((err)=>{
      console.error(err);
    });
  }
}

export function addMacrosToCurrent(macros,id){
  return (dispatch)=>{
    fetch(`http://${config.host}:${config.port}/addMacrosToCurrent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({macros: macros, id: id})
    })
    .then((res)=>{
      dispatch({
        type: 'ADD_MACROS_TO_CURRENT',
        data: {currentDay: res}
      });
    });
    dispatch({
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0,0,0,0],
        entryMacros: [0,0,0,0],
        servings: 0
      }
    });
  }
}

export function postFood(foodEntry){
  console.log(foodEntry);
  return (dispatch)=>{
    fetch(`http://${config.host}:${config.port}/post_food_entry`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodEntry)
    })
    .then(()=>{
      dispatch({
        type: 'POST_FOOD_TO_DB',
      });
    })
    .catch((err)=>{
      console.error(err);
    });
    dispatch({
      type: 'RESET_FORM',
      data: {
        newQuery: '',
        queryResults: [],
        foodMacros: [0,0,0,0],
        entryMacros: [0,0,0,0],
        servings: 0
      }
    });
  }
}