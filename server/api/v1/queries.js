const knex = require('../../knex');

module.exports = {
  getTasks: function() {
    console.log('get tasks')
    return knex.select('*').from('task');
  }
};
