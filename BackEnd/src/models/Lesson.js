const mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
  title_lesson: String,
  content: String,
  videoUrl: String,
  resources: String,
  chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter' }
})

module.exports = mongoose.model('Lesson', LessonSchema)
