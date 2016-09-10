const Puzzle = require('./Puzzle.js');
module.exports = { 
  retrievePuzzles (req, res) { //retrieve all puzzles
    Puzzle.find({}, (err, data) => err ? 
      res.status(404).send(err) : res.status(200).send(JSON.stringify(data)));}, 
  retrievePuzzleSet (req, res) { // retrieve only puzzles in a given set (treasure hunt)
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle}, (err, data) => err ? 
      res.status(404).send(err) : res.status(200).send(JSON.stringify(data)));}, 
  retrievePuzzle (req, res) { //retrieve a single puzzle
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, (err, data) => err ? 
      res.status(404).send(err) : res.status(200).send(JSON.stringify(data)));}, 
  createPuzzles (req, res) { //takes an array of puzzles and return the array of puzzles created
    var dataArr = [];
    req.body.forEach((puzzleObj, index) => new Puzzle(puzzleObj).save((err, data) => {
        err ? res.status(500).send(err) : dataArr.push(data);
        index === req.body.length - 1 && res.status(201).send(JSON.stringify(dataArr));
      }));}, 
  deletePuzzles (req, res) { //deletes all puzzles and returns status
    Puzzle.remove({}, (err, data) => err ? 
      res.status(500).send(err): res.status(201).send(data));}, 
  deletePuzzleSet (req, res) { // delete all puzzles in a given set (treasure hunt)
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle}, (err, data) => err ? 
        res.status(500).send(err) : res.status(200).send(JSON.stringify(data)));}, 
  deletePuzzle (req, res) { //delete a single puzzle
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, (err, data) => err ? 
        res.status(500).send(err) : res.status(200).send(JSON.stringify(data)));}};