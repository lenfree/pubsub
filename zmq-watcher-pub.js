'use strict';

const
  fs = require('fs'),
  zmq = require('zmq'),
  filename = process.argv[2],
  publisher = zmq.socket('pub');

  fs.watch(filename, function(){
    publisher.send(['MYTOPIC', JSON.stringify({
      file: filename,
      timestamp: Date.now(),
      type: 'changed'
    })]);
  });

  publisher.bind('tcp://*:5432', function(err){
    if (err) throw err;
    console.log('Listening on port 5432');
  });
