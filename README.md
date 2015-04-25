Node scripts
=========================================================

Node scripts that uses pub/sub with zmq.
This use fs watcher, triggers whenever the file attreibutes
changed.

Getting started:
===============

brew install zmq
npm install

Create output_file.txt
```
touch output_file.txt
```


On one terminal:
```
node --harmony zmq-watcher-pub.js output_file.txt
```

Open second terminal:
```
node --harmony zmq-watcher-sub.js
```

Third terminal:
```
touch output_file.txt
```
