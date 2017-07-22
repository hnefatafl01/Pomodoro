exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM task; ALTER SEQUENCE task_id_seq restart with 5;')
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, title: 'migrate db', completed: false},
        {id: 2, title: 'create auth feature', completed: false },
        {id: 3, title: 'clean up ui', completed: false },
        {id: 4, title: 'start angular frontend', completed: true }
      ]);
    });
};
