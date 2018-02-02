var express = require('express');  
var app = express();

// Pass it the Express application, and listen on port 8080. 
var server = require('http').createServer(app).listen(8080,function(){
    var port = server.address().port;
    console.log("Server running at port %s",port)
});

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

var io = require('socket.io').listen(server);

