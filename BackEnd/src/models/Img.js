const mongoose = require('mongoose')

const ImgSchema = new mongoose.Schema({
  url: String
})

module.exports = mongoose.model('Img', ImgSchema)
