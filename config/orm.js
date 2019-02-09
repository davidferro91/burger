var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, col, val], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, objColVal, condition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??;";
        connection.query(queryString, [table, objColVal, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });

    }
};

module.exports = orm;