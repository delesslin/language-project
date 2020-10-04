const express = require('express')
const apiRouter = express()
const wordsRouter = require('./words')
const userRouter = require('./users')

apiRouter.use('/words', wordsRouter)

apiRouter.use('/users', userRouter)

module.exports = apiRouter
