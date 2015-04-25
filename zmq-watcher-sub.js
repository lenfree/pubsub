'use strict';

const
  zmq = require('zmq'),
  subscriber = zmq.socket('sub');

  subscriber.subscribe('MYTOPIC');
  subscriber.on('message', function(topic, data){
    let
      message = JSON.parse(data),
      date = new Date(message.timestamp);
    process.stdout.write(topic + ": , File: '" + message.file + "' changed on " + date + "\n");
  });
  subscriber.connect('tcp://localhost:5432');

