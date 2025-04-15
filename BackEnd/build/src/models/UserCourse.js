"use strict";

var mongoose = require('mongoose');
var UserCourseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  progress: {
    type: Number,
    "default": 0,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    "enum": ['in_progress', 'completed']
  },
  isPaid: {
    type: Boolean,
    "default": true
  }
}, {
  timestamps: true // Tự động tạo createdAt & updatedAt
});
module.exports = mongoose.model('UserCourse', UserCourseSchema);