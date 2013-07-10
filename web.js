var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var filename = "./index.html";
var file = fs.readFileSync(filename,'utf8');


app.get('/', function(request, response) {
  response.send(file);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
