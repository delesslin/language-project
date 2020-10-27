const mongoose = require('mongoose')

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
})

// export model user with UserSchema
module.exports = mongoose.model('message', MessageSchema)
