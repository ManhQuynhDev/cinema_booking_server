var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user')
var configRouter = require('./routes/config');
var movieRouter = require('./routes/movie')
var authorRouter = require('./routes/author');
var actorRouter = require('./routes/actor');
var categoryRouter = require('./routes/category');
var evaluationRouter = require('./routes/evaluation');
var favoriteRouter = require('./routes/favorite');
var cinemaRouter = require('./routes/cinema');
var roomRouter = require('./routes/room');
var chairRouter = require('./routes/chair');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/MovieServer')
  .then(() => console.log('Connected!'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/movies', movieRouter);
app.use('/evaluations', evaluationRouter);
app.use('/category', categoryRouter);
app.use('/actors', actorRouter);
app.use('/authors', authorRouter);
app.use('/favorites', favoriteRouter);
app.use('/configs', configRouter);
app.use('/cinemas',cinemaRouter);
app.use('/chair',chairRouter);
app.use('/room',roomRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
