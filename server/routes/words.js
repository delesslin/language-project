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
wordsRouter.post('/', async (req, res) => {
  //TODO: Expand Error codes (Specifically error code for duplicate values)

  if (req.user.roles.includes('editor')) {
    const Word = new wordModel(req.body)

    try {
      await Word.save()
      res.status(200).send(Word)
    } catch (err) {
      console.error(err)
      res.status(500).send(err)
    }
  } else {
    res.sendStatus(403)
  }
})
// ==================
// READ
// ==================
wordsRouter.get('/', async (req, res) => {
  try {
    if (req.user.roles.includes('admin') || req.user.roles.includes('editor')) {
      const Words = await wordModel.find({})

      res.status(200).send(Words)
    } else {
      const Words = await wordModel.find({ public: true })

      res.status(200).send(Words)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

// ==================
// UPDATE
// ==================
wordsRouter.patch('/:_id', async (req, res) => {
  if (req.user.roles.includes('editor')) {
    try {
      const Word = await wordModel.findOneAndUpdate(
        { _id: req.params._id },
        req.body
      )
      // await wordModel.save()
      res.status(200).send(Word)
    } catch (err) {
      console.error(err)
      res.status(500).send(err)
    }
  } else {
    res.sendStatus(403)
  }
})
// =================
// DELETE
// =================
wordsRouter.delete('/:_id', async (req, res) => {
  if (req.user.roles.includes('editor')) {
    try {
      await wordModel.findOneAndDelete({ _id: req.params._id })

      // if (!Words) res.status(404).send('No item found')
      res.status(200).send()
    } catch (err) {
      console.error(err)
      res.status(500).send(err)
    }
  } else {
    res.sendStatus(403)
  }
})

module.exports = wordsRouter
