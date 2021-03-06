const router = require('express').Router();

const db = require('../db/db.js')

router.get('/', async (req, res, next) => {
    try {
      const users = await db.query(`SELECT * FROM users`)
      res.send(users);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req, res, next) => {
    try {
      const users_data = await db.query(`SELECT * FROM users INNER JOIN finances ON (users.id = finances.user_id) WHERE users.id = ${req.params.id}`)
      res.send(users_data);
    } catch (err) {
      next(err);
    }
  });

  module.exports = router;