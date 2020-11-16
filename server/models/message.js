const mongoose = require('mongoose')
const responseSchema = new mongoose.Schema({
  message: {
    type: String,
    default: '',
  },
  sentAt: {
    type: Date,
    default: null,
  },
  author: {
    type: String,
    default: 'user',
  },
})
const MessageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'message',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  completed: {
    type: Boolean,
    default: false,
  },
  ignored: {
    type: Boolean,
    default: false,
  },
  response: responseSchema,
})

// export model user with UserSchema
module.exports = mongoose.model('message', MessageSchema)
