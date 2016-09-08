/*************************
        SCHEMAS
*************************/
var mongoose = require('mongoose');
// Puzzle schema represents the information needed at each
// stop in the treasure hunt.  
var puzzleSchema = new mongoose.Schema({
  teasureHuntTitle: String,
  // Unique IDs of the current, previous, and next puzzles
  // (like a linked list of puzzles).
  head: {
    type: Boolean,
    default: false
  },
  tail: {
    type: Boolean, 
    default: false
  },
  next: String,
  previous: String,
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

module.exports = mongoose.model('Puzzle', puzzleSchema);


