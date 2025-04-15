"use strict";

var mongoose = require('mongoose');
var LessonSchema = new mongoose.Schema({
  title_lesson: String,
  content: String,
  videoUrl: String,
  resources: String,
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
  }
});
module.exports = mongoose.model('Lesson', LessonSchema);