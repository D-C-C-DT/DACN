const mongoose = require('mongoose')

const TestSubmissionSchema = new mongoose.Schema({
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submittedAt: Date,
  score: Number,
  duration: String // e.g. "00:15:30"
}, {
  timestamps: true // Automatically create createdAt & updatedAt fields
})

module.exports = mongoose.model('TestSubmission', TestSubmissionSchema)
