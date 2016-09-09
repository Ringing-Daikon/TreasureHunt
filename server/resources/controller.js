var Puzzle = require('./Puzzle.js');

module.exports = {
  //retrieve all puzzles
  retrievePuzzles (req, res) {
    Puzzle.find({}, (err, data) => { 
      err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  },
  // retrieve only puzzles in a given set (treasure hunt)
  retrievePuzzleSet (req, res) {
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle}, (err, data) => { 
      err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  },
  retrievePuzzle (req, res) {
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, (err, data) => { 
      err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  },
  //will create all puzzles from array and return the array of puzzles created
  createPuzzles (req, res) {
    var dataArr = [];
    req.body.forEach((puzzleObj, index) => {
      new Puzzle(puzzleObj).save((err, data) => {
        err ? 
          res.status(500).send(err) 
          : dataArr.push(data);
        index === req.body.length - 1 && res.status(201).send(JSON.stringify(dataArr));
      });
    });
  },
  //deletes all puzzles and returns object with status and number deleted
  deletePuzzles (req, res) {
    Puzzle.remove({}, (err, data) => {
      err ? 
        res.status(500).send(err)
        : res.status(201).send(data);
    });
  },
  // 
  deletePuzzleSet (req, res) {
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle}, (err, data) => { 
      err ? 
        res.status(500).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  },
  deletePuzzle (req, res) {
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, (err, data) => { 
      err ? 
        res.status(500).send(err)
        : res.status(200).send(JSON.stringify(data));
    });
  }
};
  