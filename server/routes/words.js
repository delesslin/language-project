// ====================
// CALLS TO:
// /api/words
// ====================
// MERN MongoDB, Express, React, Node

// TODO: ABility to retrieve words based on query

const express = require('express')

const wordsRouter = express()

const wordModel = require('../models/word.js')

// ============================
// CREATE
// ============================
wordsRouter.post('/words', async (req, res) => {
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
wordsRouter.get('/words', async (req, res) => {
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
wordsRouter.patch('/words/:_id', async (req, res) => {
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
wordsRouter.delete('/words/:_id', async (req, res) => {
  try {
    await wordModel.findOneAndDelete({ _id: req.params._id })

    // if (!Words) res.status(404).send('No item found')
    res.status(200).send()
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})

module.exports = wordsRouter
