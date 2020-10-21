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
// ===============================
// SETUP OWNER
// ===============================
const createAdmin = async () => {
  console.log('//////creating owner')
  const username = 'admin'
  const roles = ['owner', 'admin', 'editor']
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PWORD
  if (email == null || password == null) {
    console.warn(
      '///WARNING: You need to assign an admin email and password through environmental variables'
    )
    return
  }
  const user = {
    username,
    email,
    roles,
    password,
  }

  // encrypt password
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(password, salt)
  let owner = await userModel.findOneAndUpdate({ username: 'admin' }, user)
  if (owner == null) {
    owner = new userModel(user)
    owner.save()
  }
  console.log('owner initalized')
  console.log(owner)
}
createAdmin()

// ==================================
// READ
// only available to admin
// ==================================
userRouter.get('/', async (req, res) => {
  if (req.user.roles.includes('admin')) {
    const users = await userModel.find({})
    res.send(users)
  } else {
    res.sendStatus(403)
  }
})
// ====================
// CREATE
// ====================
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
    if (!req.user.roles.includes('admin')) {
      res.sendStatus(403)
    }
    // see if there are any errors
    const errors = validationResult(req)
    // if there are errors, send the errors back to client
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      })
    }
    // destructure request body
    const { username, email, password, roles } = req.body
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
        roles,
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
        process.env.SECRET,
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
      console.error(err.message)
      res.status(500).send('Error in Saving')
    }
  }
)
// ======================
// UPDATE
// ======================
userRouter.patch('/', async (req, res) => {
  // console.log('REQ')
  const user = req.body
  // console.log(user)
  if (!req.user.roles.includes('admin')) {
    res.sendStatus(403)
  }
  try {
    await userModel.findOneAndUpdate({ _id: user._id }, user)
    // if (!Words) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

// =================================
// DELETE
// ====================================
userRouter.delete('/:_id', async (req, res) => {
  console.log("let's delete")
  if (!req.user.roles.includes('admin')) {
    res.sendStatus(403)
  }
  try {
    await userModel.findOneAndDelete({ _id: req.params._id })

    // if (!Words) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})
// ======================
// LOGIN
// ======================
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
    console.log(req.body)
    // get any errors that were returned by the array
    const errors = validationResult(req)
    // if there was an error, return error to client
    if (!errors.isEmpty()) {
      console.error('ERRPRS', errors)
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
        console.error('no user')
        return res.status(400).json({
          message: 'User not exists',
        })
      }
      // compare submitted pword to saved pword
      const isMatch = await bcrypt.compare(password, user.password)
      // if there is no match, send error
      if (!isMatch) {
        console.log('bad pword')
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
        process.env.SECRET,
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

// TODO: implement auth
// https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i

module.exports = userRouter
