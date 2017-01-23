
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table)=> {
    table.increments();
    table.text('email').notNullable();
    table.string('password').notNullable();
    table.boolean('is_active').notNullable().defaultTo(1);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
