const knexConfig = require('../knexfile').development;
const knex = require('knex')(knexConfig);
const express = require('express');
const router = express.Router();

router.get('/searches/recent', async (req, res) => {
  const userId = req.query.user_id;

  try {
    const searches = await knex('searches')
      .select('search_term')
      .where('user_id', userId)
      .groupBy('search_term')
      .orderByRaw('MAX(created_at) DESC')
      .limit(5);

    res.json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


  router.get('/searches/popular', async (req, res) => {
    try {
      const searches = await knex('searches')
        .select('search_term')
        .count('id as count')
        .groupBy('search_term')
        .orderBy('count', 'desc')
        .limit(5);
  
      res.json(searches);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  router.get('/searches', async (req, res) => {
    const { query } = req.query;

  try {
    const searches = await knex('searches')
      .select('search_term')
      .where('search_term', 'like', `%${query}%`)
      .groupBy('search_term')
      .limit(5);

    res.json(searches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
  
  router.post('/searches', async (req, res) => {
    const { user_id, search_term } = req.body;

  try {
    const [id] = await knex('searches').insert({
      user_id,
      search_term,
    });

    res.status(201).json({ id, user_id, search_term });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
  
router.get('/articles', async (req, res) => {
  const { query } = req.query;

  try {
    const articles = await knex('articles')
      .select('id', 'title', 'short_description')
      .whereRaw(
        `MATCH(title, short_description, html_content) AGAINST(? IN NATURAL LANGUAGE MODE)`,
        [query]
      )
      .select(
        knex.raw(
          `(
            (MATCH(title) AGAINST(? IN NATURAL LANGUAGE MODE) * 3) +
            (MATCH(short_description) AGAINST(? IN NATURAL LANGUAGE MODE) * 2) +
            (MATCH(html_content) AGAINST(? IN NATURAL LANGUAGE MODE) * 1)
          ) AS relevance`,
          [query, query, query]
        )
      )
      .orderBy('relevance', 'desc')
      .limit(10);

    res.json(articles);
  } catch (err) {
    console.error('Error fetching articles:', err);
    res.status(500).json({ error: err.message });
  }
});
  

module.exports = router;