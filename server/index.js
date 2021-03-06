const path = require('path')
const express = require('express')
const app = express()
module.exports = app



app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(express.static('./public'))

app.use('/users', require('./routes'))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})



app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})