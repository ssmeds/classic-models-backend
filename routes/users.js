var express = require('express');
const app = require('../app');
var router = express.Router();
const mysql = require("mysql2");
const cors = require("cors");

router.use(cors());

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("Users get router")
});

module.exports = router;