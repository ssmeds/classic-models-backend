var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2");
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var contactsRouter = require('./routes/contacts');

var app = express();

app.use(cors());

app.locals.con = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "root",
  database: "classicmodels"
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/contacts', contactsRouter);

module.exports = app;