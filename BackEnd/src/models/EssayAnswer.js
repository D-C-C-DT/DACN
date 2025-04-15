const mongoose = require('mongoose')

const EssayAnswerSchema = new mongoose.Schema({
  submissionId: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSubmission' },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  answerText: String,
  markedScore: Number,
  feedback: String
})

module.exports = mongoose.model('EssayAnswer', EssayAnswerSchema)
