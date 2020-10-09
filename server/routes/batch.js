const express = require('express')

const batchRouter = express()
const wordModel = require('../models/word.js')
// TODO: IMPLEMENT MONGOOSE BATCH UPLOAD
batchRouter.post('/', (req, res) => {
  wordModel.insertMany(req.body, (err, docs) => {
    if (err) {
      res.status(404).send('Something went wrong!')
    } else {
      res.status(200).send('Succesfully uploaded words!')
    }
  })
  // console.log(req.body)
})

module.exports = batchRouter
