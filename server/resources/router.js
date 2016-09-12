const router = require('express').Router();
const api = require('./controller.js');
/***Puzzle Routes***/
router.route('/puzzles') 
  .get(api.getPuzzles)
  .post(api.addPuzzles)
  .delete(api.deletePuzzles);

router.route('/puzzles/:treasureHuntTitle')
  .get(api.getPuzzleSet)
  .delete(api.deletePuzzleSet);

router.route('/puzzles/:treasureHuntTitle/:riddleTitle')
  .get(api.getPuzzle)
  .delete(api.deletePuzzle);

/***User Routes***/
router.route('/users')
  .get(api.getUsers);

router.route('/users/:username')
  .get(api.getUser) 
  .post(api.addUser) 
  .put(api.changeUserPass) //no util yet
  .delete(api.deleteUser); 

router.route('/users/:username/riddles')
  .get(api.getSolvedRiddles) 
  .post(api.addSolvedRiddle);
  
router.route('/users/:username/pass')
  .post(api.compareUserPass);

module.exports = router;