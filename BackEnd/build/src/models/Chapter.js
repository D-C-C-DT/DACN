"use strict";

var mongoose = require('mongoose');
var ChapterSchema = new mongoose.Schema({
  title: String,
  order: Number,
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }
});
module.exports = mongoose.model('Chapter', ChapterSchema);