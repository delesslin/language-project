// MERN MongoDB, Express, React, Node
// TODO: Authentication for admins
// TODO: ABility to retrieve words based on query

const express = require('express')
const fetch = require('node-fetch')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')
const apiRouter = express()

const wordModel = require('./models/word.js')
require('dotenv').config()

mongoose.set('useCreateIndex', true)
//mongoDB Atlas
const CONNECTION_URL = process.env.CONNECTION_URL

// Should this be connecting here or in each API call?
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
// ============================
// CREATE
// ============================
apiRouter.post('/words', async (req, res) => {
  //TODO: Expand Error codes (Specifically error code for duplicate values)
  const Word = new wordModel(req.body)

  try {
    await Word.save()
    res.status(200).send(Word)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})
// ==================
// READ
// ==================
apiRouter.get('/words', async (req, res) => {
  const Words = await wordModel.find({})
  try {
    res.status(200).send(Words)
  } catch (err) {
    res.status(500).send(err)
  }
})

// ==================
// UPDATE
// ==================
apiRouter.patch('/words/:_id', async (req, res) => {
  try {
    // console.log(req.body)
    const Word = await wordModel.findOneAndUpdate(
      { _id: req.params._id },
      req.body
    )
    // await wordModel.save()
    res.status(200).send(Word)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
// =================
// DELETE
// =================
apiRouter.delete('/words/:_id', async (req, res) => {
  try {
    await wordModel.findOneAndDelete({ _id: req.params._id })

    // if (!Words) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

module.exports = apiRouter
