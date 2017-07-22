const express = require('express');
const router = express.Router({ mergeParams: true });
const Queries = require('./queries');

router.get('/', (req, res) => {
    Queries.getTasks()
    .then((tasks) => {
        console.log(tasks);
        res.json(tasks);
    });
});

module.exports = router;
