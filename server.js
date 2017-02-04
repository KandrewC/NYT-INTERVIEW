'use strict';

/*
Web application that exposes /hello/:name endpoint and displays Hello, <name>! Otherwise shows a 404 error.
*/

var express = require('express')
var winston = require('winston')
var app = express()

app.get('/hello/:name/', function (req, res) {
v
    res.send('Hello, ' + req.params.name + '!')
    winston.log('info', 'Name endpoint reached!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.get('*', function(req, res){
  res.status(404).send('404 Error');
  winston.log('info', '404 Error')
});
