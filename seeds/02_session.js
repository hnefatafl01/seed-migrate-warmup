
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('session').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('session').insert({
          exercise: 'squat',
          sets: 3,
          repetitions: 10,
          load: 185,
          date: new Date(),
          user_id: 3
        }),
        knex('session').insert({
          exercise: 'clean',
          sets: 5,
          repetitions: 3,
          load: 185,
          date: new Date(),
          user_id: 3
        })
      ]);
    });
};
