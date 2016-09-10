/*************************
        DATABASE
*************************/
const mongoose = require('mongoose');
const chalk = require('chalk');
const mongoUri = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(mongoUri).connection
  .on('error', err => console.log(err))
  .once('open', () => {
    console.log(require('chalk').green.dim('Connected to ' + mongoUri), 
      chalk.magenta.bold.underline('\nLoading Default Data...'));
    require('../data/default.json')
      .forEach((puzzleObj, index, arr) => new require('../resources/Puzzle.js')(puzzleObj).save((err, data) => index === arr.length - 1 && console.log(chalk.cyan.bold('Load Complete.'))));});