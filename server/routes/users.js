// ====================
// CALLS TO:
// /api/words
// ====================
const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userRouter = express()

const userModel = require('../models/users.js')
userRouter.get('/', async (req, res) => {
  const users = await userModel.find({})
  res.send(users)
})

userRouter.post(
  '/sign-up',
  [
    // Make sure username isn't blank
    check('username', 'Please Enter a Valid Username').not().isEmpty(),
    // make sure email is actually an email
    check('email', 'Please enter a valid email').isEmail(),
    // make sure password is at least 6 chars long
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    console.log('request to sign up!')
    // see if there are any errors
    const errors = validationResult(req)
    // if there are errors, send the errors back to client
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      })
    }
    // destructure request body
    const { username, email, password } = req.body
    try {
      // see if there is already a user with given email
      let user = await userModel.findOne({
        email,
      })
      // if user already exists then send error
      if (user) {
        return res.status(400).json({
          msg: 'User Already Exists',
        })
      }
      // if error wasn't sent, then create new document
      user = new userModel({
        username,
        email,
        password,
      })
      // encrypt password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)
      // save user with encrypted pword
      await user.save()
      // create payload with user id
      // should this be _id???
      const payload = {
        user: {
          id: user.id,
        },
      }
      // create JWT token
      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err
          // send JWT token back
          res.status(200).json({
            token,
          })
        }
      )
    } catch (err) {
      // if error, send error
      console.log(err.message)
      res.status(500).send('Error in Saving')
    }
  }
)

userRouter.post(
  '/login',
  [
    // make sure it is actually an email
    check('email', 'Please enter a valid email').isEmail(),
    // make sure password is at least 6 chars long
    check('password', 'Please enter a valid password').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    // get any errors that were returned by the array
    const errors = validationResult(req)
    // if there was an error, return error to client
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      })
    }
    // destructure request body
    const { email, password } = req.body
    try {
      // see if there is a user with this email
      let user = await userModel.findOne({ email })
      if (!user) {
        return res.status(400).json({
          message: 'User not exists',
        })
      }
      // compare submitted pword to saved pword
      const isMatch = await bcrypt.compare(password, user.password)
      // if there is no match, send error
      if (!isMatch) {
        return res.status(400).json({
          message: 'Incorrect Password !',
        })
      }
      // create payload object using _id
      const payload = {
        user: {
          id: user.id,
        },
      }
      // create JWT token
      jwt.sign(
        payload,
        'randomString',
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err
          // send token
          res.status(200).json({
            token,
          })
        }
      )
    } catch (e) {
      console.error(e)
      res.status(500).json({
        message: 'Server Error',
      })
    }
  }
)

module.exports = userRouter
