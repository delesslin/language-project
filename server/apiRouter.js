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

apiRouter.get('/test', (req, res) => {
  res.send('1234')
})

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

apiRouter.get('/words', async (req, res) => {
  const Words = await wordModel.find({})
  try {
    res.send(Words)
  } catch (err) {
    res.status(500).send(err)
  }
})

apiRouter.post('/Words', async (req, res) => {
  const Words = new wordModel(req.body)

  try {
    await Words.save()
    res.send(Words)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

//ToDo: Expand Error codes (Specifically error code for duplicate values)

apiRouter.post('/new-word', async (req, res) => {
  console.log(req.body)
  const Words = new wordModel(req.body)

  try {
    const newWord = await Words.save()
    console.log(newWord)
    res.send(newWord)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

apiRouter.delete('/Words/:language_entry', async (req, res) => {
  try {
    const Words = await wordModel.findOneAndDelete(req.params.language_entry)

    if (!Words) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

apiRouter.patch('/Words/:language_entry', async (req, res) => {
  try {
    await wordModel.findOneAndUpdate(req.params.language_entry, req.body)
    await wordModel.save()
    res.send(Words)
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = apiRouter

// TODO: Authentication for admins
// TODO: ABility to retrieve words based on query
// TODO: Add new word
// TODO: Edit Word
// TODO: Delete Word

// CRUD: CREATE, READ, UPDATE, DELETE
// exports.apiRouter = apiRouter

// MERN MongoDB, Express, React, Node
