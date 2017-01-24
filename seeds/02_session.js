exports.seed = (knex, Promise) => {
  return knex.raw("DELETE FROM session; ALTER SEQUENCE session_id_seq RESTART WITH 1")
    .then(() => {
      return Promise.all([
        knex('session').insert({
          exercise: 'squat',
          sets: 3,
          repetitions: 10,
          load: 185,
          date: new Date(),
          user_id: 1
        }),
        knex('session').insert({
          exercise: 'clean',
          sets: 5,
          repetitions: 3,
          load: 185,
          date: new Date(),
          user_id: 1
        })
      ]);
    });
};
