var express = require ('express');
var mysql = require ('mysql');
var nodemon = require('nodemon');
var validator = require('express-validator');
var path = require('path');
var async = require('async');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "F4nt4$yF00tb4ll!",
    database: "FFL_league_data",
    port: "3000"
});

var app = express();

//View Engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index', {
        title:'Fantasy Football Draft Tool'
    });
});



app.listen(3000,function(){
    console.log('Server Started on Port 3000...');
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql")
    var sql = "Create Table players (displayname VARCHAR(255), position VARCHAR(20),team VARCHAR(255), jersey INT(3))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
