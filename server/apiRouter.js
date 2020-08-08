const express = require('express')
const apiRouter = express.Router()
apiRouter.get('/test', (req, res) => {
  res.send('1234 Api!')
})

exports.apiRouter = apiRouter
