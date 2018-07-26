// JavaScript source code
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "F4nt4$yF00tb4ll!",
    database: "league_data"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE player_info ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Updated");
    });
});