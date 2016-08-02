var express = require('express');
var router = require('express').Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response, next){
  response.json(request.isAuthenticated());
  response.sendFile(path.resolve(__dirname, '../views/login.html'));
});

router.post('/',
  passport.authenticate('local', {
    successRedirect:'/views/home.html', //THIS TO HOME
    failureRedirect:'/views/login.html' // MAYBE A WARNING PAGE?
  })
);

module.exports = router;
