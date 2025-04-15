"use strict";

var mongoose = require('mongoose');
var RatingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  score: {
    Number: Number,
    min: 1,
    max: 5
  },
  comment: {
    String: String,
    trim: true
  }
}, {
  timestamps: true // Tự động tạo createdAt & updatedAt
});
module.exports = mongoose.model('Rating', RatingSchema);