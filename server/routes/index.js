const express = require('express')
const apiRouter = express()
const wordsRouter = require('./words')
const userRouter = require('./users')
const batchRouter = require('./batch')

apiRouter.use('/words', wordsRouter)

apiRouter.use('/users', userRouter)
apiRouter.use('/batch', batchRouter)

module.exports = apiRouter
