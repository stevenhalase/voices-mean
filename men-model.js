'use strict'
const mongoose = require('mongoose');

const menSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  unit: {type: String},
  img: {type: String},
  video : {type: String},
  audio: {type: String},
  images : [{type: String}],
  stories : [{
    id: {type: Number},
    title: {type: String},
    images: [{type: String}],
    content: {type: String}
  }]
});

const Men = mongoose.model('men', menSchema);

module.exports = Men;
