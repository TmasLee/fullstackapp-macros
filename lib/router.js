import express from 'express';

import serverRender from 'renderers/server';
import db from '../models/index';
import serverStore from './serverStore';

const router = express.Router();
const header = {
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods' : 'POST',
  'Content-Type': 'application/json'
}

router.delete('/deletefood', (req,res)=>{
  db.foods.deleteFood(req.body.id)
  .then((response)=>{
    res.set({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'DELETE',
      'Content-Type': 'application/json'
    });
    console.log(response);
    res.json(response);
  })
});

router.get('/alldays', (req,res)=>{
  db.days.getAllDays()
  .then((response)=>{
    res.json(response);
  });
});

router.get('/allfoods', (req,res)=>{
  db.foods.getAllFoods()
  .then((response)=>{
    res.json(response);
  });
});

router.post('/post_day_entry', (req,res)=>{
  db.days.postNewEntry()
  .then((response)=>{
    res.set(header);
    res.json(response);
  });
});

router.post('/post_food_entry', (req,res)=>{
  db.foods.postFood(req.body)
  .then((response)=>{
    res.set(header);
    res.json(response);
  });
});

router.post('/addMacrosToCurrent', (req,res)=>{
  let macros = req.body.macros;
  let id = req.body.id;
  console.log(macros);
  db.days.addMacros(macros,id)
  .then((response)=>{
    res.set(header);
    res.send(response);
  });
})

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

router.get('/', async(req, res)=>{
  const initialContent = await serverRender();
  res.render('ejs_index', {...initialContent});
});

export default router;