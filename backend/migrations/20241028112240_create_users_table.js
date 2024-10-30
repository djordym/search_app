exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username').notNullable();
      // Add other fields if necessary
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users');
  };
  