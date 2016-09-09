var router = require('express').Router();
var api = require('./controller.js');
router.route('/api/puzzles') 
  .get(api.retrievePuzzles)
  .post(api.createPuzzles)
  .delete(api.deletePuzzles);

module.exports = router;