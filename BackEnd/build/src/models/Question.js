"use strict";

var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  },
  content: String,
  isEssay: Boolean
});
module.exports = mongoose.model('Question', QuestionSchema);