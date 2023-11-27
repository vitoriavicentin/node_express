var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Get");
});

app.post("/", function (req, res) {
  res.send("Post");
});

app.delete("/", function (req, res) {
  res.send("Delete");
});

app.get("/list", function (req, res) {
  res.send("List");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
});
