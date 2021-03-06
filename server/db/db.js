const { Client } = require('pg')
const client = new Client({
 database: process.env.DATABASE_URL || 'dealers_choice_pg'
})


client.connect();

module.exports = client;