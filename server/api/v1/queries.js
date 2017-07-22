const knex = require('../../knex');

module.exports = {
  getTasks: function() {
    return knex.select('*').from('task');
  },
  getTask: function(id) {
    return knex('task').where('id', id).select('*') //.from('task');
  },
  addTask: function(task) {
    return knex('task').insert(task);
  },
  deleteTask: function(id) {
    return knex('task').where('id', id).del();
  }
};
