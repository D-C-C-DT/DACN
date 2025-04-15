const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  userName: String,
  phone: { type: Number, required: true },
  avatar: String,
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false }
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
})
UserSchema.methods.toJSON = function () {
  const user = this.toObject()
  delete user.password
  delete user.accessToken
  delete user.refreshToken
  return user
}
module.exports = mongoose.model('User', UserSchema)
