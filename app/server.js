var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
