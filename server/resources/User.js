/*************************
      USER SCHEMA
*************************/

// username, password, and an array of completed puzzles/riddles
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //fixes depreciated mongoose promise by implementing ES6 promise.

var userSchema = new mongoose.Schema({
  username: { 
    type: String,
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }, 
  solvedRiddles: { 
    //array of objects containing the riddle and treasurehunt names
    type: [Object],
    default: []
  } 
}, 
{ versionKey: false });

module.exports = mongoose.model('User', userSchema);