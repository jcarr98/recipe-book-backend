const pg = require('pg');
const connectionString = process.env.DB_URL;
let pool;

module.exports = {
  getPool: function() {
    if (pool) return pool;  // If we already have an established connection pool, return it
    pool = new pg.Pool({connectionString});
    return pool;
  }
}