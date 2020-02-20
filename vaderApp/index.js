'use strict';

const express = require("express");

var app = express();
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_xxjk4spc:qb84gciu80d4euonvs2anfc9cp@ds163182.mlab.com:63182/heroku_xxjk4spc";

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  console.log("start");
  console.log("wtf is gooioing on?");
  res.end("start");
});

app.get('/create', function (req, res) {
  console.log("kalsjadjaskdkjdsalkjsdlkajdslksajdlksajdlkjsa");
  res.end("hshdhahdahdhadhahdahd");

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_xxjk4spc");
    dbo.createCollection("vader", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });
});


var apiServer = app.listen(PORT, function () {
  var host = apiServer.address().address
  var port = apiServer.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
