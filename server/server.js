var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = 1234;
app.listen(port, function() {
  console.log('Now listening on Port: ' + port);
});


var databasePath = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(databasePath);

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('Connection to database successful');
});