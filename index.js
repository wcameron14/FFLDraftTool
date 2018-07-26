var express = require ('express');
var mysql = require ('mysql');
var nodemon = require('nodemon');
var validator = require('express-validator');

var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000,function(){
    console.log('Server Started on Port 3000...');
})
