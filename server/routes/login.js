var express = require('express');
var router = require('express').Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response, next){
  response.json(request.user);
  response.sendFile(path.resolve(__dirname, '../views/login.html'));
});

router.get('/success', function(request, response, next){
  response.sendStatus(200);
});

router.get('/failure', function(request, response, next){
  response.sendStatus(401);
});

router.post('/',
  passport.authenticate('local', {
    successRedirect:'/',
    failureRedirect:'/failure',
    failureFlash: "Invalid username or password, try again!"
  })
);

module.exports = router;
