var express = require ('express');
var mysql = require ('mysql');
var nodemon = require('nodemon');
var validator = require('express-validator');
var path = require('path');

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
})
