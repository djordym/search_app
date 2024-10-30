const knex = require('./knexfile'); // Adjust path as needed

async function dropAllTables() {
  const db = require('knex')(knex.development); // Adjust environment if necessary

  // Get list of all tables in the database
  const tables = await db.raw(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
  `);

  // Drop each table
  for (let row of tables.rows) {
    await db.schema.dropTableIfExists(row.table_name);
  }

  console.log("All tables dropped");
  await db.destroy();
}

dropAllTables().catch((err) => {
  console.error("Error dropping tables:", err);
  process.exit(1);
});
