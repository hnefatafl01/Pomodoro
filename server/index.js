const express = require('express');
const app = express();
const tasks = require('./api/v1/tasks');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config({silent: true});

app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  exposedHeaders: ['Content-Range', 'X-Content-Range']
}));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', tasks);

// app.get('/',(req, res) => {
//   res.send('hi');
// });

app.listen(3000, ()=> {
  console.log('listening on port 3000');
});
