const { Client } = require('pg')
const client = new Client({
 connectionString: process.env.DATABASE_URL || 'dealers_choice_pg'
})


client.connect();

module.exports = client;