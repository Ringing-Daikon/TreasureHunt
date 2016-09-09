
/*************************
        DATABASE
*************************/
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/treasure-hunt-database';
var chalk = require('chalk');
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});
db.once('open', function() {
  console.log(require('chalk').green.dim('Connected to ' + mongoUri));
  //initialize data from default.json
  console.log(chalk.magenta.bold('Loading Default Data...'));
  var outputs = [];
  require('../data/default.json')
    .forEach(function(puzzleObj, index, arr) {
      new require('../resources/Puzzle.js')(puzzleObj).save(function (err, data) {
        err ? 
          outputs.push(chalk.yellow(err)) 
          : outputs.push(chalk.green(data));
        if(index === arr.length - 1) {
          outputs.forEach(function(output) {
            console.log(output);
          });
          console.log(chalk.cyan.underline.bold('Load Complete.'), chalk.grey.inverse.bold('\nDuplicate errors indicate data has already been populated, otherwise loaded documents will be displayed.'));
        }
      });
    });
});

module.exports = db;

