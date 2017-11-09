require('babel-register');

var result = require('./render.js').default;

var express = require('express');
var application = express();



application.get('/', function(req, res){
	res.send(result);
});

application.listen(3005);