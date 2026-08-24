//npm i mysql2 knex
const knex = require('knex')({
    
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'admin',
    password: '1234',
    database: 'biblioteca'
  }
})

module.exports = knex