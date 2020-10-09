const express = require('express')

const batchRouter = express()

// TODO: IMPLEMENT MONGOOSE BATCH UPLOAD
batchRouter.post('/', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

module.exports = batchRouter
