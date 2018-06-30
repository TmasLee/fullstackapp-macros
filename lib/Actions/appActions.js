import fetch from 'node-fetch';
import config from '../config';

export function createNewDay(newDay){
  fetch('/createnewday',{
    method: 'POST',
    body: newDay
  })
  .then((res)=>{
    return res.end();
  })
  .catch((err)=>{
    console.error(err);
  });
  return {
    type: 'CREATE_NEW_DAY',
    data: {currentDay: newDay}
  }
}

export function addNewDay(){
  return (dispatch)=>{
    fetch(`/add_day_entry`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
        }
    })
    .catch((err)=> {
      console.error(err);
    });
    dispatch({
      type: 'ADD_NEW_DAY'
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
      console.log(res);
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

export function getAllFoods(allFoods){
 return {
   type: 'GET_ALL_FOODS',
   data: {allFoods: allFoods}
 }
}