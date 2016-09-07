var mongoose=require('mongoose');

var databasePath = 'mongodb://localhost/treasure-hunt-database';
mongoose.connect(databasePath);

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('Connection to database successful');
});