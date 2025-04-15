const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title_course: String,
    description: String,
    duration: Number,
    totalLessons: {
        type: Number,
        default: 0
    },
    price: Number,
    image: { type: mongoose.Schema.Types.ObjectId, ref: 'Img' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', CourseSchema)
