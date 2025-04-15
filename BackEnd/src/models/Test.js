const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
  title_test: String,
  description: String,
  type: { type: String, enum: ['quiz', 'essay', 'mix'] },
  lessonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }
})

module.exports = mongoose.model('Test', TestSchema)
