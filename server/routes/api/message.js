// ====================
// CALLS TO:
// /api/words
// ====================
// MERN MongoDB, Express, React, Node

// TODO: ABility to retrieve words based on query

const express = require('express')

const messageRouter = express()

const message = require('../../models/message.js')

// ============================
// CREATE
// ============================
messageRouter.post('/', async (req, res) => {
  //TODO: Expand Error codes (Specifically error code for duplicate values)

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
      const Messages = await message.find({})

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
