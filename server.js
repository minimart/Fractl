var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var index = require('./server/routes/index');
var login = require('./server/routes/login');
var register = require('./server/routes/register');
var home = require('./server/routes/home');
// var newEntry = require('./server/routes/newEntry');
// var pastEntries = require('./server/routes/pastEntries');
// var charts = require('./server/routes/charts');
// var emergency = require('./server/routes/emergency');
var submitDiaryEntry = require('./server/routes/submitDiaryEntry');
var retrieveDiaryEntry = require('./server/routes/retrieveDiaryEntries');
var mongoURI = "mongodb://localhost:27017/fractl";
var mongoose = require('mongoose');
var MongoDB = mongoose.connect(mongoURI).connection;
var User = require('./server/models/user.js');
var flash = require('connect-flash');


MongoDB.on('error', function(err) {
    console.log('mongodb connection error: ', err);
});

MongoDB.once('open', function() {
    console.log('MongoDB connection open!')
});
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use(flash());

app.use(session({
  secret:'dialectic',
  key: 'user',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 600000, secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());



app.use('/', index);
app.use('/login', login);
app.use('/register', register);
app.use('/submit-diary-entry', submitDiaryEntry);
app.use('/retrieve-diary-entry', retrieveDiaryEntry);
// app.use('/home', home);
// app.use('/newEntry', newEntry);
// app.use('/pastEntries', pastEntries);
// app.use('/charts', charts);
// app.use('/emergency', emergency);


passport.serializeUser(function(user, done){
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(error, user){
    if(error){
      return done(error);
    }
    done(null,user);
  });
});
passport.use('local', new localStrategy({
  passReqToCallback : true,
  usernameField: 'username'
},
function(request, username, password, done){
  User.findOne({ username: username }, function(error, user){
    if(error){
      throw error
    };
    if(!user) {
      return done(null, false, {message:'Incorrect username and password.'});
    }
    user.comparePassword(password, function(error, isMatch){
      if(error){
        throw error;
      }
      if (isMatch) {
        return done(null, user);
      } else {
        done(null, false, { message: 'Incorrect username and password.' });
      }
    });
  });
}));


var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
