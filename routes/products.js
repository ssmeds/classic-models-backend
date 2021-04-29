var express = require('express');
const app = require('../app');
var router = express.Router();
const mysql = require("mysql2");
const cors = require("cors");

router.use(cors());

/* GET products listing. */
router.get('/', function (req, res, next) {

  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM productlines`

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      res.json(result);
    })
  })
});

router.post('/', (req, res) => {
  let productCategory = req.body.category;
  console.log("req.body", req.body);
  console.log("productCategory", productCategory);
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT productName FROM products WHERE productLine="${productCategory}"`

    req.app.locals.con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log(result);

      res.json(result)
    })
  })
})


module.exports = router;