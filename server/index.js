var app = require('./server.js'); 
var port = 1337;

app.listen(port, function() {
  console.log('TreasureHunt RESTful API listening on port ' + port);
});