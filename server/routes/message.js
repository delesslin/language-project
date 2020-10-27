// ====================
// CALLS TO:
// /api/words
// ====================
// MERN MongoDB, Express, React, Node

// TODO: ABility to retrieve words based on query

const express = require('express')

const messageRouter = express()

const message = require('../models/message.js')

// ============================
// CREATE
// ============================
messageRouter.post('/', async (req, res) => {
  console.log('write new message!')
  //TODO: Expand Error codes (Specifically error code for duplicate values)
  // console.log(req.user.roles)
  const Message = new message(req.body)

  try {
    await Message.save()
    res.status(200).send(Message)
  } catch (err) {
    console.error(err)
    res.status(500).send(err)
  }
})
// ==================
// READ
// ==================
messageRouter.get('/', async (req, res) => {
  try {
    if (req.user.roles.includes('editor')) {
      console.log('all words!')
      const Messages = await message.find({})
      // console.log(Words)
      res.status(200).send(Messages)
    } else {
      res.sendStatus(403)
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

// ==================
// UPDATE
// ==================
messageRouter.patch('/:_id', async (req, res) => {
  if (req.user.roles.includes('editor')) {
    try {
      // console.log(req.body)
      const Message = await message.findOneAndUpdate(
        { _id: req.params._id },
        req.body
      )
      // await wordModel.save()
      res.status(200).send(Message)
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
messageRouter.delete('/:_id', async (req, res) => {
  if (req.user.roles.includes('editor')) {
    try {
      await message.findOneAndDelete({ _id: req.params._id })

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

module.exports = messageRouter
