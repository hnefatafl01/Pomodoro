const express = require('express');
const router = express.Router({ mergeParams: true });
const Queries = require('./queries');
const knex = require('../../knex');

router.get('/', (req, res) => {
    Queries.getTasks()
        .then((tasks) => {
            res.json(tasks);
    });
});

router.post('/', (req, res) => {
    Queries.addTask(req.body)
        .then((result) => {          
          res.json(result);
        })
        .catch((err) => {
            console.log('err',err);
            knex.destroy();
            process.exit(1);
        });
});

router.get('/:id',(req, res) => {
    Queries.getTask(req.params.id)
        .then(result => res.json(result));
});

router.delete('/:id', (req, res) => {
    Queries.deleteTask(req.params.id)
        .then( result => res.json(result));
})

module.exports = router;
