const express = require("express");
const bcrypt = require('bcryptjs');
const Users = require("./users-model.js");
const { restrict } = require('./users-middleware');

const router = express.Router();

router.get("/", restrict(), async (req, res, next) => {
  try {
    res.json(await Users.find())
  } catch (err) {
    next(err)
  }
});

router.post('/users', async (req, res, next) => {
  
})

module.exports = router;
