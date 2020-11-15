const express = require('express')
const apiRouter = express()
const wordsRouter = require('./words')
const userRouter = require('./users')
const batchRouter = require('./batch')
const messageRouter = require('./message')
const imageRouter = require('./image')
const jwt = require('jsonwebtoken')
const UserModel = require('../../models/users')

// user auth
apiRouter.use('/', (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader == null) {
    req.user = {
      roles: ['guest'],
    }
    next()
  } else {
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
      req.user = {
        roles: ['guest'],
      }
      next()
    } else {
      jwt.verify(token, process.env.SECRET, async (err, user) => {
        if (err) {
          console.error(err)
          return res.sendStatus(403)
        } else {
          const data = await UserModel.find({ id: user.id })

          req.user = {
            roles: data[0].roles,
          }
          next()
        }
      })
    }
  }
})
apiRouter.use('/words', wordsRouter)
apiRouter.use('/message', messageRouter)
apiRouter.use('/users', userRouter)
apiRouter.use('/batch', batchRouter)
apiRouter.use('/image', imageRouter)

module.exports = apiRouter
