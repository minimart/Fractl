var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/user.js');

router.post('/', function(request, response){
  var data = request.body;
  // console.log(data);
  console.log('Request.body is', request.body);
  // console.log(request.user);


  User.findById(request.user._id, function(err, user){
    
    user.entries.push(request.body);
    user.save(function(err){
      if(err){
        console.log(err);
        response.sendStatus(500)
      }
      response.sendStatus(200)
    })
  });

});

module.exports = router;
