var express = require('express');
var passport = require('passport');
var router = express.Router();
var Account = require('../models/account');

// Home page
router.get('/', function (req, res) {
  res.render('index', { title: 'soaps App', user : req.user });
});

// Registration page
router.get('/register', function(req, res) {
  res.render('register', { title: 'soaps App Registration'});
});

// Register new user
router.post('/register', function(req, res) {
  Account.findOne({ username : req.body.username }, function(err, user) {
    if(err) {
      return res.render('register', { title: 'Registration', message: 'Registration error', account : req.body.username });
    }
    if(user == {} ){
      return res.render('register', { title: 'Registration', message: 'Existing User', account : req.body.username });
    }
    let newAccount = new Account({ username : req.body.username });
    Account.register(newAccount, req.body.password, function(err, user){
      if (err) {
        return res.render('register', { title: 'Registration', message: 'access error', account : req.body.username });
      }
      if(!user){
        return res.render('register',{ title: 'Registration', message: 'access error', account : req.body.username });
      }
      console.log('Sucess, redirect');
      res.redirect('/');
    });
  });
});

// Login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'soaps App Login', user : req.user });
});

// Authenticate user
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// Logout user
router.get('/logout', function(req, res, next) { // use post or delete for better safety
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

// Test route
router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  if (req.session.returnTo) {
    res.redirect(req.session.returnTo);
  }
  res.redirect('/');
});

module.exports = router;

