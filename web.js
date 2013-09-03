var express = require('express');


var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function (request, response) {
  var fs = require('fs');
  var buf = new Buffer(fs.readFileSync('index.html'),'utf-8');
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log("Listening on " + port);
});
