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
    let errCount = 0;
    let quotes = require('../data/quotes.json')
    require('../data/default.json')
      .forEach((puzzleObj, index, arr) => new require('../resources/Puzzle.js')(puzzleObj).save(err => {
        err && errCount++;
        index === arr.length - 1 && console.log(chalk.cyan.bold('Load Complete.'), chalk.yellow(`(${errCount} conflicts)`), chalk.bold.blue.underline('\n\nMotivational Quote:\n'), chalk.cyan(`${quotes[Math.floor(Math.random() * quotes.length)].replace(/~/, '\n  -')}`))
        })
      );
  });