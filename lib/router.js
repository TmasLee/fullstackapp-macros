import express from 'express';
import serverRender from 'renderers/server';
import db from './db_models/db.js';
import serverStore from './serverStore';

const router = express.Router();

router.get('/alldays', async(req,res)=>{
  let allDays = await db.days.getAllDays();
  res.json(allDays);
});

router.get('/allfoods', (req,res)=>{
  let allFoods = db.foods.getAllFoods();
  res.send(allFoods);
});

router.post('/changequery', (req,res)=>{
  serverStore.dispatch({
    type: 'CHANGE_QUERY',
    data: {newQuery: req.body}
  });
})

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