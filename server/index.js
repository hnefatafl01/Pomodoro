const express = require('express');
const app = express();
const tasks = require('./api/v1/tasks');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config({silent: true});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', tasks);
app.get('/',(req, res) => {
  res.send('hi');
});

app.listen(3000, ()=> {
  console.log('listening on port 3000');
});
