const express = require('express');
const logger = require('@football/logger');
const socket = require('socket.io');

const PORT = process.env.PORT || 8080;
const app = express();



const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


// socket setup
const socketIO = socket(server);

socketIO.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  socket.on('chat', function(data){
    socketIO.sockets.emit('chat',data)
  });
});