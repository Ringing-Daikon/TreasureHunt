/*************************
        SCHEMAS
*************************/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //fixes depreciated mongoose promise by implementing ES6 promise.
var puzzleSchema = new mongoose.Schema({
    treasureHuntTitle: String,
    next: {
      type: String,
      default: 'null' }, 
    previous: {
      type: String,
      default: 'null' }, 
    location: {
      latitude: Number,
      longitude: Number }, 
    radius: {
      type: Number,
      default: 40 }, 
    riddleTitle: {
      type: String }, 
    riddleContent: String,
    riddleAnswer: String }, 
  { versionKey: false });
//indexes puzzles uniquely based on the combination of their title and associated treasure hunt
puzzleSchema.index({ treasureHuntTitle: 1, riddleTitle: 1 }, { unique: true });
module.exports = mongoose.model('Puzzle', puzzleSchema);