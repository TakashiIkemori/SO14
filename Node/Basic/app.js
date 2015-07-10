var express = require('express');
var app = express();

app.use(express['static']('public')); 

app.get('/', function(req, res){
  console.log("お茶でもどうぞ");
  res.sendFile(__dirname + "/index.html");
});

app.listen(9999);
