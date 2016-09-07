var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


/*************************
        SERVER
*************************/

var app = express();

// Allows us to access the request data on req.body.
app.use(bodyParser.json());
// Allows us to access the request url and parameters
// on req.url and req.params.
app.use(bodyParser.urlencoded({extended: true}));

var port = 1234;
app.listen(port, function() {
  console.log('Listening on Port: ' + port);
});


/*************************
        DATABASE
*************************/

var databasePath = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(databasePath);

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('Database connection successful.');
});


/*************************
        SCHEMAS
*************************/

// Puzzle schema represents the information needed at each
// stop in the treasure hunt.  
var puzzleSchema = new mongoose.Schema({
  teasureHuntTitle: String,
  // Unique IDs of the current, previous, and next puzzles
  // (like a linked list of puzzles).
  id: {
    type: String,
    unique: true
  },
  next: {
    type: String,
    unique: true
  },
  previous: {
    type: String,
    unique: true
  },
  // Location where user must be to receive/solve the riddle.
  location: {
    latitude: Number,
    longitude: Number
  },
  // Radius from location that the user must be within in order to receive/solve the puzzle.
  // Currently default is 40 (feet?) but this will probably change depending on what data
  // is needed to provide geofencing.
  radius: {
    type: Number,
    default: 40
  },
  // The title of the puzzle
  // ( ex: 'The Goat of Hack Reactor' );
  title: String,
  // The riddle that must be solved.
  // ( ex: 'What lies beneith the stone goat?' )
  riddle: String,
  // An array of acceptable answers to the riddle.
  // ( ex: ['wreath', 'wreaths', 'stone wreath', 'stone wreaths', 'garland', 'garlands', 'stone garland' ...] )
  answers: [String],
  // Date that the puzzle schema is created (not used for anything at the moment).
  createdAt: {
    type: Date,
    default: Date.now
  }
});

var Puzzle = mongoose.model('Puzzle', puzzleSchema);


