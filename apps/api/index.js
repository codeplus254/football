const express = require('express');
// const logger = require('@football/logger');
const socket = require('socket.io');
require('dotenv').config({path: '../../.env'});
const request = require('request');



const PORT = process.env.PORT || 8080;
const app = express();
let liveFeeds;


const liveStream = process.env.LIVESTREAM;
// Make liveStream Connection
const liveStreamURL = `${liveStream}json?eventId=6274128&cb=1565859188068`;

const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// socket setup
const socketIO = socket(server);

socketIO.on('connection', function(socket){
  function getLiveFeeds() {
    let response = request(liveStreamURL, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        liveFeeds = body.PitchGraphic.Actions;
        socket.on('chat', () => {
          socketIO.sockets.emit('chat',JSON.stringify(liveFeeds));
        });
        
      });
   return response;
  }
  //get live feeds every second
  getLiveFeeds();
  
});