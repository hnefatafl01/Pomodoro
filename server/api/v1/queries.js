const knex = require('../../knex');

module.exports = {
  getTasks: function() {
    return knex.select('*').from('task');
  }
};
