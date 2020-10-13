const express = require('express')
const apiRouter = express()
const wordsRouter = require('./words')
const userRouter = require('./users')
const batchRouter = require('./batch')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/users')

// user auth
apiRouter.use('/', (req, res, next) => {
  console.log(req.headers)
  const authHeader = req.headers.authorization
  console.log('authHeader', authHeader)
  if (authHeader == null) {
    req.user = {
      roles: ['guest'],
    }
    next()
  } else {
    const token = authHeader && authHeader.split(' ')[1]
    console.log('token', token)
    jwt.verify(token, process.env.SECRET, async (err, user) => {
      console.log(err)
      if (err) {
        return res.sendStatus(403)
      } else {
        const data = await UserModel.find({ id: user.id })
        console.log('roles', data[0].roles)

        req.user = {
          roles: data[0].roles,
        }
        next()
      }
    })
  }
})
apiRouter.use('/words', wordsRouter)

apiRouter.use('/users', userRouter)
apiRouter.use('/batch', batchRouter)

module.exports = apiRouter
