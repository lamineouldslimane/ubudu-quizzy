// Imports
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var quizzesRouter = require('./routes/quizzes')

// Express app creation
var app = express();

// Passport initialization 
require('./config/passport')

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/quizzes', quizzesRouter);

// The error handler
/* app.use(function (err, req, res, next) {
  // Set locals, only providing the error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render(res.locals.message || 'Error.');
}); */

module.exports = app;
