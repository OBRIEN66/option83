// require http, express, and socket.io
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// serves index.html
app.get('/', function(req, res){
  	res.sendFile(__dirname + '/index.html');
});

// sends message 
io.on('connection', function(socket){

  	socket.on('chat message', function(msg){
    	io.emit('chat message', msg);
    	
  	});
});
var port = 7879;

// listens on port 7879
http.listen(port, function(){
  	console.log('listening on *:' + port);
});
