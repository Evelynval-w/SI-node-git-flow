const pool = require('../config/db');

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price NUMERIC(10,2) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
};

createTable();

module.exports = {
  create: async (name, price) => {
    const result = await pool.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', // products not users
      [name, price]
    );
    return result.rows[0];
  },

  update: async (id, name, price) => {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', // products not users
      [name, price, id]
    );
    return result.rows[0];
  }
};