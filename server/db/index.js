
/*************************
        DATABASE
*************************/
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function(err) {
  console.log(err);
});
db.once('open', function() {
  console.log('Connected to ' + mongoUri);
});

module.exports = db;