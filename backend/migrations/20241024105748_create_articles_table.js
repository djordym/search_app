exports.up = function (knex) {
  return knex.schema
    .createTable('articles', (table) => {
      table.increments('id').primary();
      table.string('title', 191).notNullable();
      table.text('short_description').notNullable();
      table.text('html_content').notNullable();
    })
    .then(() => {
      // Add FULLTEXT index on 'title'
      return knex.schema.raw('ALTER TABLE articles ADD FULLTEXT ft_title (title)');
    })
    .then(() => {
      // Add FULLTEXT index on 'short_description'
      return knex.schema.raw('ALTER TABLE articles ADD FULLTEXT ft_short_description (short_description)');
    })
    .then(() => {
      // Add FULLTEXT index on 'html_content'
      return knex.schema.raw('ALTER TABLE articles ADD FULLTEXT ft_html_content (html_content)');
    })
    .then(() => {
      // Add combined FULLTEXT index on all columns
      return knex.schema.raw(
        'ALTER TABLE articles ADD FULLTEXT ft_all (title, short_description, html_content)'
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('articles');
};
