const bcrypt = require('bcryptjs')

exports.seed = (knex, Promise)=> {
  return knex.raw("DELETE FROM \"user\"; ALTER SEQUENCE user_id_seq RESTART WITH 1").then(()=> {
      return Promise.all([
        knex('user').insert({
          email: 'kevin@email.com',
          password: bcrypt.hashSync('bacon', 8)
        }),
        knex('user').insert({
          email: 'rufus@dogemail.com',
          password:  bcrypt.hashSync('i like squirrels', 8)
        })
      ]);
    });
};
