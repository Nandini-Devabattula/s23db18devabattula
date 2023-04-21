var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var soapsRouter = require('./routes/soaps');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var soaps = require("./models/soaps");
var resourceRouter = require('./routes/resource');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }));  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/soaps', soapsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server st art
async function recreateDB(){
 // Delete everything
 await soaps.deleteMany();
 let instance1 = new
 soaps({"Soap_Name": "Margo", "Soap_cost":200, "Soap_Color": "Green"});

 let instance2 = new
 soaps({"Soap_Name": "Dove", "Soap_cost": 100, "Soap_Color": "White"});

 let instance3 = new
 soaps({"Soap_Name": "Lux", "Soap_cost": 500, "Soap_Color": "blue"});

 

instance1.save().then( () => { console.log('First Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });
instance2.save().then( () => { console.log('Second Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });

instance3.save().then( () => { console.log('Third Object Object is created'); }).catch( (e) => { console.log('There was an error', e.message); });
}



let reseed = true;
if (reseed) { recreateDB();}
module.exports = app;


