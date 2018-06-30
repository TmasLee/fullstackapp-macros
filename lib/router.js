import express from 'express';

import serverRender from 'renderers/server';
import db from './db_models/db.js';
import serverStore from './serverStore';
import * as appActions from './Actions/appActions';

const router = express.Router();

router.get('/alldays', (req,res)=>{
  db.days.getAllDays()
  .then((response)=>{
    // serverStore.dispatch(appActions.getAllDays(response));
    res.json(response);
  });
});

router.get('/allfoods', (req,res)=>{
  db.foods.getAllFoods()
  .then((response)=>{
    serverStore.dispatch(appActions.getAllFoods(resposne));
    res.json(response);
  });
});

router.post('/add_day_entry', (req,res)=>{
  serverStore.dispatch({
    type: 'ADD_NEW_DAY',
  });
  return db.days.addNewEntry();
});

router.get('/getdatetime', (req,res)=>{
  serverStore.dispatch({
    type: 'GET_DATE_TIME',
    data: {date: new Date()}
  });
  res.send();
})

router.get('/getmostrecentday', (req,res)=>{
  db.days.getMostRecent()
  .then((response)=>{
    res.json(response);
  });
})

router.post('/createnewday',(req,res)=>{
  serverStore.dispatch({
    type: 'CREATE_NEW_DAY',
    data: {currentDay: req.body}
  });
})

router.get('/', async(req, res)=>{
  const initialContent = await serverRender();
  res.render('ejs_index', {...initialContent});
});

export default router;