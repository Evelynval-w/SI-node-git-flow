const dotenv = require('dotenv');
const path = require('path');

// Read which environment we are in (default: dev)
const ENV = process.env.NODE_ENV || 'dev';

// Load the matching .env file
dotenv.config({
  path: path.resolve(__dirname, `../../.env.${ENV}`)
});

// These variables MUST exist or the app won't start
const required = [
  'NODE_ENV',
  'PORT',
  'DB_HOST',
  'DB_PORT',
  'DB_NAME',
  'DB_USER'
];

// Check each variable
const missing = required.filter(key => !process.env[key]);

if (missing.length > 0) {
  console.warn('⚠️  WARNING: Missing environment variables:');
  missing.forEach(key => console.warn(`   - ${key}`));
  process.exit(1); // stop the app immediately
}

console.log(`Environment loaded: ${ENV}`);

module.exports = {
  env: ENV,
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '' // empty string if not set
  }
};