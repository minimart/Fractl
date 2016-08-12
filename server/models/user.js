var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var Entry = new Schema ({
  date: Date,
  urges: String,
  whatUrges: {whatUrges1:String, whatUrges2:String, whatUrges3:String},
  emotion1: {emotionObject:{emotion:String, intensity: Number}},
  emotion2: {emotionObject:{emotion:String, intensity: Number}},
  emotion3: {emotionObject:{emotion:String, intensity: Number}},
  emotion4: {emotionObject:{emotion:String, intensity: Number}},
  emotion5: {emotionObject:{emotion:String, intensity: Number}},
  emotion6: {emotionObject:{emotion:String, intensity: Number}},
  drugs:[ {drugList:[{drug: String, amount: String}]}, {drugList:[{drug: String, amount: String}]}, {drugList:[{drug: String, amount: String}]}, {drugList:[{drug: String, amount: String}]}],
  dbtSkills: String,
  skillsUsed: [String],
  journaling: String
});

var User = new Schema({
    username: {type: String, required: true, index: {unique: true} },
    password: {type: String, required: true},
    entries: [Entry]
});

User.pre('save', function(next){

  var user = this;
  var SALT_WORK_FACTOR = 10;
  if(user.isModified('password') == false){
    return next();
  };
  bcrypt.hash(user.password, SALT_WORK_FACTOR, function(err, hash){
    if(err){
      console.log(error);
    }
    console.log('Hashed password!', hash);
    user.password = hash;
    return next();
  });
})

User.methods.comparePassword = function(candidatePassword, callback){
// no error, boolean indicating whether the passwords matched
// this.password is the password in the database
// candidatePassword is what we received on the request

var user = this;

bcrypt.compare(candidatePassword, user.password, function(err, isMatch){
  if(err){
    console.log('There was an error', err);
    callback(err, isMatch);
  } else {
    console.log('isMatch', isMatch);
    callback(null, isMatch)
  };
})
};

module.exports = mongoose.model('User', User);
