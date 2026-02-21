const { Pool } = require('pg');
const config = require('./env');

// Pool = a group of reusable database connections
const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  database: config.db.name,
  user: config.db.user,
  password: config.db.password
});

// Test the connection when the app starts
pool.connect((err, client, release) => {
  if (err) {
    console.error(' Database connection failed:', err.message);
  } else {
    console.log( Connected to database: ${config.db.name}`);
    release(); // release the connection back to the pool
  }
});

module.exports = pool;