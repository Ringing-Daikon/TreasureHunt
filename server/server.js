/*************************
        SERVER
*************************/
const bodyParser = require('body-parser');
require('./db/index.js'); //only need to execute database once to start
const app = require('express')();
app.use(require('morgan')('dev'));
// Allows us to access the request data on req.body.
app.use(bodyParser.json());
// Allows us to access the request url and parameters
// on req.url and req.params.
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', require('./resources/router.js'));
module.exports = app;