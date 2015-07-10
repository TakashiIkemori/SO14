var express = require('express');
var app = express();
//var counter = require(__dirname + "/counter");

app.use(express['static']('public'));

app.get("/", function(req, res){
  //res.send(counter().toString());
  res.sendFile(__dirname + "/index.html");
});

app.get("/ajax", function(req, res){
  res.send("明日も雨だよ");
});

app.listen(9999);
