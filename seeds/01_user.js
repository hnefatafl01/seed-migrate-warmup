exports.seed = (knex, Promise)=> {
  return knex.raw("DELETE FROM \"user\"; ALTER SEQUENCE user_id_seq RESTART WITH 1").then(()=> {
      return Promise.all([
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



exports.seed = (knex, Promise) => {

    const users = [{
      email: 'kevin.erick01@gmail.com',
      password: 'ugly_duckling'
    },
    {
      email: 'dillon@gmail.com',
      password: 'steinman'
    }]
    return knex('user').insert(users)
  
}
