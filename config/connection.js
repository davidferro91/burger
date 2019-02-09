require("dotenv").config();
var mysql = require("mysql");
var keys = require("./keys.js");

var connection = mysql.createConnection(keys.MySQL);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;