import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './router';
import config from './config';

const app = express();

routes.all('*', cors());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/',routes);

app.set('view engine', 'ejs');

app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}...`);
});
