var express = require('express');
var fs = require('fs');

var buf = new Buffer(30);
var app = express.createServer(express.logger());

fs.readFileSync('index.html','utf8', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

app.get('/', function(request, response) {
  response.send(fs.readFileSync);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
