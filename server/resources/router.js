const router = require('express').Router();
const api = require('./controller.js');
/***Puzzle Routes***/
router.route('/api/puzzles') 
  .get(api.getPuzzles)
  .post(api.addPuzzles)
  .delete(api.deletePuzzles);

router.route('/api/puzzles/:treasureHuntTitle')
  .get(api.getPuzzleSet)
  .delete(api.deletePuzzleSet);

router.route('/api/puzzles/:treasureHuntTitle/:riddleTitle')
  .get(api.getPuzzle)
  .delete(api.deletePuzzle);

/***User Routes***/
router.route('/api/users')
  .get(api.getUsers);

router.route('/api/users/:username')
  .get(api.getUser) 
  .post(api.addUser) 
  .put(api.changeUserPass) //no util yet
  .delete(api.deleteUser); 

router.route('/api/users/:username/riddles')
  .get(api.getSolvedRiddles) 
  .post(api.addSolvedRiddle);
  
router.route('/api/users/:username/pass')
  .post(api.compareUserPass);

module.exports = router;