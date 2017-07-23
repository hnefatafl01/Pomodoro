const express = require('express');
const app = express();
const tasks = require('./api/v1/tasks');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config({silent: true});

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:4200',
  preflightContinue: false
};

app.use(cors(corsOptions));
app.use('*', cors(corsOptions));



app.use('/tasks', tasks);

// app.get('/',(req, res) => {
//   res.send('hi');
// });

app.listen(3000, () => {
  console.log('listening on port 3000');
});
