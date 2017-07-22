
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', (table) => {
    table.increments();
    table.string('title');
    table.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('goal');
};
