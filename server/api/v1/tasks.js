const express = require('express');
const knex = require('knex')
const router = express.Router({ mergeParams: true });
const Queries = require('./queries');

  router.get('/', (req, res) => {
    // console.log(Queries.getTasks())
      Queries.getTasks()
      .then((tasks) => {
          console.log(tasks);
          res.json(tasks);
      });
  });

module.exports = router;
