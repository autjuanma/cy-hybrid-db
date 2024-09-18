const { defineConfig } = require('cypress');
const { Pool } = require('pg');

// Create a separate function to get the env object
function getEnv() {
  return {
    db: {
      host: '127.0.0.1', // Update with your PostgreSQL host
      user: 'adm', // Update with your PostgreSQL username
      password: 'admin', // Update with your PostgreSQL password
      database: 'my-cy-database', // Update with your PostgreSQL database name
    },
  };
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDb: query => {
          return queryTestDb(query, getEnv());
        },
      });
    },
  },
});

function queryTestDb(query, env) {
  const pool = new Pool({
    host: env.db.host,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database,
  });

  return pool.query(query)
    .then((results) => {
      pool.end();
      return results.rows;
    })
    .catch((error) => {
      pool.end();
      throw error;
    });
}

// Test connection to PostgreSQL database
async function testConnection() {
  try {
    const query = 'SELECT 1';
    const results = await queryTestDb(query, getEnv());
    console.log('Connected to PostgreSQL database successfully!');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
  }
}

testConnection();