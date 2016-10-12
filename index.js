'use strict'
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const request = require('request');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const Men = require('./men-model');
const multer = require('multer');
const port = process.env.PORT || 3000;

const uristring =
    process.env.MONGODB_URI ||
    'mongodb://localhost/voices';

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
app.get('/api/men', function (req,res) {
  ///// Send Men Profiles
  Men.find({}, function(error, men) {
    // console.log('Men Profiles: ', men)
    res.send(men);
  })
})

app.post('/api/men', function (req, res) {
  let man = req.body.man;
  Men.findByIdAndUpdate(man._id, man, {new: true}, function(err, newMan) {
    res.send(newMan);
  })
})

app.post('/api/men/new', function (req, res) {
  let man = new Men(req.body.man);
  man.save(function(err, newMan) {
    res.send(newMan);
  })
})

app.post('/api/men/delete', function (req, res) {
  let man = req.body.man;
  Men.findByIdAndRemove(man._id, function(err, removedMan) {
    res.send(removedMan);
  })
})

var storage = multer.diskStorage({ //multers disk storage settings
   destination: function (req, file, cb) {
       cb(null, './app/images/uploads/');
   },
   filename: function (req, file, cb) {
     console.log(file)
       cb(null, file.fieldname + '-upload-' + file.originalname.split('.')[0] + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
   }
});

var upload = multer({ //multer settings
               storage: storage
           }).single('file');

/** API path that will upload the files */
app.post('/upload', function(req, res) {
   upload(req,res,function(err){

       if(err){
            res.json({error_code:1,err_desc:err});
            return;
       }
        res.json({error_code:0,err_desc:null});
   });
});
///// Set up server listening port
app.listen(port, function () {
    console.log('Server started at http://localhost:' + port)
})
