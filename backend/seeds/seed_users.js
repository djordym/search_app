exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        { id: 1, username: 'Alice' },
        { id: 2, username: 'Bob' },
      ]);
    });
};
