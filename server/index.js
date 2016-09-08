var app = require('./server.js'); 
var port = 1234;

app.listen(port, function() {
  console.log('TreasureHunt RESTful API listening on port ' + port);
});