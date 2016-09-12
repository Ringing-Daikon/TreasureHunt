const Puzzle = require('./Puzzle.js');
const User = require('./User.js');

module.exports = { 

/***Puzzle Controllers***/

  getPuzzles (req, res) { 
    //gets all puzzles
    Puzzle.find({}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data)));
  }, 

  getPuzzleSet (req, res) { 
    //gets only puzzles in a given set (treasure hunt)
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data)));
  }, 

  getPuzzle (req, res) { 
    //gets a single puzzle
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data)));
  }, 

  addPuzzles (req, res) { 
    //adds an array of puzzles and returns an array of puzzles added
    let dataArr = [];
    req.body.forEach((puzzleObj, index) => new Puzzle(puzzleObj)
      .save((err, data) => { err ? 
          res.status(500).send(err) 
          : dataArr.push(data);
      index === req.body.length - 1 && 
        res.status(201).send(JSON.stringify(dataArr));
      })
    );
  }, 

  deletePuzzles (req, res) { 
    //deletes all puzzles and returns status
    Puzzle.remove({}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(204).send(data));
  }, 

  deletePuzzleSet (req, res) { 
    //delete all puzzles in a given set (treasure hunt)
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(204).send(JSON.stringify(data)));
  }, 

  deletePuzzle (req, res) { 
    //delete a single puzzle
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(204).send(JSON.stringify(data)));
  },

/***User Controllers***/

  addUser (req, res) {
    //adds a user
    new User({
      username: req.params.username,
      password: req.body.password
    }).save((err, data) => err ? 
      res.status(500).send(err)
      : res.status(201).send(data)
    );
  },

  getUser (req, res) {
    //gets a user
    User.find({username: req.params.username}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(200).send(data[0])
    );
  },

  deleteUser (req, res) {
    //remove a user
    User.remove({username: req.params.username}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(204).send(data)
    );
  },

  addSolvedRiddle (req, res) {
    //adds a solved riddle. takes an object with username and 
  },

  getSolvedRiddle (req, res) {
    //gets all solved riddle for a user
  }
};