"use strict";

var mongoose = require('mongoose');
var ImgSchema = new mongoose.Schema({
  url: String
});
module.exports = mongoose.model('Img', ImgSchema);