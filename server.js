var express = require("express");
var http       = require("http");
var app = express();
var server     = http.createServer(app);
var port = process.env.PORT || 3000;

// Routes
require("./src/routes")(app);

//listen
server.listen(port, function () {
	console.log("REST server listening on port : "+  port);
});

