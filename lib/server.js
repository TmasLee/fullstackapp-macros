// require('dotenv').load();
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import serverRender from 'renderers/server';
import db from './db_models/db.js';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/alldays', async(req,res)=>{
  let allDays = await db.days.getAllDays();
  res.json(allDays);
});

app.get('/allfoods', (req,res)=>{
  let allFoods = db.foods.getAllFoods();
  res.send(allFoods);
});

app.post('/add_day_entry', (req,res)=>{
  db.days.addNewEntry();
});

app.get('/', async(req, res)=>{
  const initialContent = await serverRender();
  res.render('ejs_index', {...initialContent});
});

app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}...`);
});