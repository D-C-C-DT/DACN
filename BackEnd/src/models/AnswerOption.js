const mongoose = require('mongoose')

const AnswerOptionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  content: String,
  isCorrect: Boolean
})

module.exports = mongoose.model('AnswerOption', AnswerOptionSchema)
