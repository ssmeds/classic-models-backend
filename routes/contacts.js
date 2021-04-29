var express = require('express');
const app = require('../app');
var router = express.Router();
const mysql = require("mysql2");
const cors = require("cors");

router.use(cors());

/* GET contacts listing. */
router.get('/offices', function (req, res, next) {
  let contacts = {};
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sqlOffices = `SELECT * FROM offices`

    req.app.locals.con.query(sqlOffices, function (err, offices) {
      if (err) {
        console.log(err);
      }
      res.json(offices)
    })

  })
});

router.post('/:employeeInfo', function (req, res, next) {
  let employeeInfo = req.body.officeCode;
  console.log(req.body);
  console.log("employeeInfo:", employeeInfo);
  req.app.locals.con.connect((err) => {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM employees WHERE officeCode = "${employeeInfo}"`

    req.app.locals.con.query(sql, function (err, employees) {
      if (err) {
        console.log(err);
      }
      res.json(employees);
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