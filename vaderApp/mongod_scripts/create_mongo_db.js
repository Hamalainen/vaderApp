var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_xxjk4spc:qb84gciu80d4euonvs2anfc9cp@ds163182.mlab.com:63182/heroku_xxjk4spc";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});