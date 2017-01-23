
exports.up = function(knex, Promise) {
  return knex.schema.createTable('session', (table)=> {
    table.increments()
    table.text('exercise');
    table.integer('sets');
    table.integer('repetitions');
    table.integer('load');
    table.date('date')
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.dropTableIfExists('session')
};
