exports.up = function (knex) {
    return knex.schema.createTable('searches', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().nullable();
      table.string('search_term').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
  
      table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('searches');
  };
  