var router = require('express').Router;
var api = require('./pokemonController.js');

router.route('/api/puzzles') 
  .get(api.retrieve)
  .post(api.create)
  .delete(api.delete);

module.exports = router;