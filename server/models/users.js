const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  roles: {
    // 4 roles:
    // admin (edit users),
    // editor (edits words),
    // user (views words),
    // guest (views words but unregistered); should never be assigned, only a fn fallback
    type: [String],
    default: ['user'],
  },
})

// export model user with UserSchema
module.exports = mongoose.model('user', UserSchema)
