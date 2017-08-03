"use strict";
module.exports = function(app) {
	const AWS = require('aws-sdk');
	console.log("hi");
	app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/home.html');
	});
	
};