// Import path module
const path = require('path')

// Get the location of locations_db.db file
const dbPath = path.resolve(__dirname, 'db/locations_db.db')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Export the database
module.exports = knex
