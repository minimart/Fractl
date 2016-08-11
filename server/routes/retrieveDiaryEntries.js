var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose')
var User = require('../models/user.js')


router.get('/', function(request, response, date){
  User.find({}, function(err, entries){
    if(err){
      console.log('Failed to fetch entries', err);
      response.sendStatus(500);
    } else {
      console.log('Entries fetched!', entries);
      response.send(entries);
    }
  });
});

module.exports = router;
