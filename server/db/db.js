const { Client } = require('pg')
const client = new Client({
 database: 'dealers_choice_pg'
})


client.connect();

module.exports = client;