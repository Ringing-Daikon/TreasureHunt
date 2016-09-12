const Puzzle = require('./Puzzle.js');
const User = require('./User.js');
var bcrypt = require('bcrypt');

module.exports = { 

/***Puzzle Controllers***/

  getPuzzles (req, res) { 
    //gets all puzzles
    Puzzle.find({}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data))
    );
  }, 

  getPuzzleSet (req, res) { 
    //gets only puzzles in a given set (treasure hunt)
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data))
    );
  }, 

  getPuzzle (req, res) { 
    //gets a single puzzle
    Puzzle.find({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data))
    );
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
        : res.status(200).send(JSON.stringify(data))
    );
  }, 

  deletePuzzleSet (req, res) { 
    //delete all puzzles in a given set (treasure hunt)
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data))
    );
  }, 

  deletePuzzle (req, res) { 
    //delete a single puzzle
    Puzzle.remove({treasureHuntTitle: req.params.treasureHuntTitle, riddleTitle: req.params.riddleTitle}, 
      (err, data) => err ? 
        res.status(404).send(err) 
        : res.status(200).send(JSON.stringify(data))
    );
  },

/***User Controllers***/

  addUser (req, res) {
    //adds a user
    bcrypt.hash(req.body.password, 10, (err, bcPass) => err ?
      res.status(500).send(err) 
      : new User({
          username: req.params.username,
          password: bcPass 
        }).save((err, data) => err ? 
          res.status(500).send(err)
          : res.status(201).send(JSON.stringify(data))
        )
    );
  },

  compareUserPass(req, res) {
    User.findOne({username: req.params.username}, 
      (err, data) => err ?
        res.status(404).send(err)
        : bcrypt.compare(req.body.password, data.password, (err, match) => err ? 
            res.status(500).send(err)
            : res.status(200).send(JSON.stringify(match))
          )
    );
  },

  getUsers (req, res) {
    //gets all users
    User.find({}, 
      (err, data) => err ?
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data))
    );
  },

  getUser (req, res) {
    //gets a user
    User.findOne({username: req.params.username}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data))
    );
  },

  deleteUser (req, res) {
    //remove a user
    User.remove({username: req.params.username}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data))
    );
  },

  changeUserPass (req, res) {
    let str = '';
    for(let key in req.body) 
      str.length > 0 ? 
        str += `, ${key}`
        : str += key;
    User.findOneAndUpdate(
      {username: req.params.username}, //filter data
      req.body, //data to be filled in
      err => err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(`Updated ${str}.`))
    );
  },

  addSolvedRiddle (req, res) {
    //adds a solved riddle. takes an object with riddleTitle and treasureHuntTitle
    //first handle duplicate puzzles in controller since MongoDB does not support unique keys for subdocs.
    User.findOne({username: req.params.username}, 
      (err, data) => err ?
        res.status(404).send(err)
        : (() => { //check if riddle exists already in solvedRiddles
            let d = data.solvedRiddles,
            r = req.body;
            for(let i = 0; i < d.length; i++) 
              if(d[i].riddleTitle === r.riddleTitle &&
                d[i].treasureHuntTitle === r.treasureHuntTitle)
                return true;
            return false;
          })() ? 
            res.status(500).send(JSON.stringify('Duplicate riddle.'))
            : User.findOneAndUpdate(
              {username: req.params.username}, //filter data
              {$push: {solvedRiddles: req.body}}, //data to be filled in
              err => err ? 
                res.status(404).send(err)
                : res.status(200).send(JSON.stringify(`Added ${req.body.treasureHuntTitle}'s ${req.body.riddleTitle}`))
              )
    );
  },
  getSolvedRiddles (req, res) {
    //gets all solved riddle for a user
    User.findOne({username: req.params.username}, 
      (err, data) => err ? 
        res.status(404).send(err)
        : res.status(200).send(JSON.stringify(data.solvedRiddles))
    );
  }
};