'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const request = require('request');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;

const uristring =
    process.env.MONGODB_URI ||
    'mongodb://localhost/guild';

///// Parsing json
app.use(bodyParser.json());
///// Parsing urlencoded
app.use(bodyParser.urlencoded({extended: true}));
///// Serving static files from ./www
app.use(express.static(path.join(__dirname, './app')))
///// Connecting to MONGODB
mongoose.connect(uristring, function(error) {
  ///// If error connecting to MongoDB
  if (error) {
      console.error(error);
  ///// If successfully connected to MongoDB
  } else {
      console.log('Mongoose connected successfully')
  }
})
///// Route handler for homepage
app.get('/', function (req, res) {
  ///// Send homepage
  res.sendFile('index.html', {root : './app'})
});
///// Set up server listening port
app.listen(port, function () {
    console.log('Server started at http://localhost:' + port)
})
