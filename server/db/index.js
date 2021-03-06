const db = require('./db')
const faker = require('faker')




async function sync(){ 
await db.query(`

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS finances CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS game_results CASCADE;

CREATE TABLE users (id  SERIAL PRIMARY KEY , first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, date_joined VARCHAR(255) NOT NULL);
CREATE TABLE finances (id  SERIAL PRIMARY KEY , user_id integer REFERENCES users , account_name VARCHAR(255) NOT NULL);
CREATE TABLE games (id  SERIAL PRIMARY KEY , title VARCHAR(255) NOT NULL);
CREATE TABLE game_results (id  SERIAL PRIMARY KEY , user_id integer REFERENCES users,  outcome VARCHAR);`)


for(let i = 0; i< 10; i++){
    await db.query(`INSERT INTO users ("first_name", "last_name", "date_joined")VALUES ('${faker.name.firstName()}', '${faker.name.lastName()}', '${faker.date.recent()}' );`)
    await db.query(`INSERT INTO finances ("user_id", "account_name")VALUES ('${i+1}', '${faker.finance.accountName()}');`)
    await db.query(`INSERT INTO games ("title")VALUES ('${faker.commerce.product()}');`)

}
for(let i = 0; i< 10; i++){
await db.query(`INSERT INTO game_results ("user_id", "outcome") VALUES (${Math.ceil(Math.random()*10)}, '${(Math.floor(Math.random()*2) === 1 ? "won": "lost")}' )`)
}


console.log('data seeded')

}
module.exports = [db, faker, sync]
