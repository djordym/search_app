/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  return knex('searches')
    .del()
    .then(() => {
      return knex('searches').insert([
        { search_term: 'carpentry', created_at: knex.fn.now() },
        { search_term: 'master carpenter', created_at: knex.fn.now() },
        { search_term: 'woodworking', created_at: knex.fn.now() },
        { search_term: 'types of wood', created_at: knex.fn.now() },
        { search_term: 'tools', created_at: knex.fn.now() },
        // Add more search terms as needed
      ]);
    });
};
