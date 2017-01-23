
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user').insert({
          email: 'kevin@email.com',
          password: 'do the things'
        }),
        knex('user').insert({
          email: 'rufus@dogemail.com',
          password: 'i like squirrels'
        })
      ]);
    });
};
