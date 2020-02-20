'use strict';


const express = require("express");
var mongo = require('mongodb');

const PORT = process.env.PORT || 3000;




var app = express();
var fs = require("fs");





app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     console.log( "kalsjadjaskdkjdsalkjsdlkajdslksajdlksajdlkjsa" );
     res.end("hshdhahdahdhadhahdahd");
  });
});

var apiServer = app.listen(PORT, function () {
  var host = apiServer.address().address
  var port = apiServer.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
