var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


/*************************
        SERVER
*************************/

var app = express();

// Allows us to access the request data on req.body.
app.use(bodyParser.json());
// Allows us to access the request url and parameters
// on req.url and req.params.
app.use(bodyParser.urlencoded({extended: true}));

var port = 1234;
app.listen(port, function() {
  console.log('Now listening on Port: ' + port);
});


/*************************
        DATABASE
*************************/

var databasePath = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(databasePath);

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('Connection to database successful.');
});

// Schemas:
var puzzleSchema = new mongoose.Schema{
  id: Number,
  next: Number,
  location: {
    latitude: Number,
    Longitude: Number
  },
  riddle: String,
  answers: [String]
}

var Puzzle = mongoose.model('Puzzle', puzzleSchema);