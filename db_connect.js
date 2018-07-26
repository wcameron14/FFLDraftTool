// JavaScript source code
import mysql from "mysql";

var con = createConnection({
    host: "localhost",
    user: "root",
    password: "F4nt4$yF00tb4ll!",
    database: "league_data"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to LeagueDB!");
});