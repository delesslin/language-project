// ====================
// CALLS TO:
// /api/words
// ====================
// MERN MongoDB, Express, React, Node

// TODO: ABility to retrieve words based on query
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL
const express = require('express')

const messageRouter = express()

const message = require('../../models/message.js')
const genEmail = require('./genEmail/index.js')

// ============================
// CREATE
// ============================
messageRouter.post('/response/:_id', async ({ body, params }, res) => {
  const { _id } = params
  const { message: response_message } = body
  console.log('////////////////////////////////')
  console.log(`//Attempting to send email in response to request#${_id}`)
  console.log(`////${response_message}`)
  console.log('////////////////////////////////')
  // check that it is an editor
  const Matches = await message.find({ _id })
  if (Matches.length > 0) {
    const { createdAt, name, email, message: request_message } = Matches[0]
    const { text, html } = genEmail({
      createdAt: createdAt.toDateString(),
      name,
      email,
      request_message,
      response_message,
    })
    const msg = {
      to: email,
      from: CONTACT_EMAIL, // Use the email address or domain you verified above
      subject: 'Response to your Catawba Language Request',
      text,
      html,
    }
    // use SENDGRID to send object as email
    sgMail
      .send(msg)
      .then(async () => {
        // update response for given _id
        await message.findOneAndUpdate(
          { _id },
          {
            completed: true,
            response: {
              message: response_message,
              sentAt: new Date(),
              author: 'DEVELOPER',
            },
          }
        )
        res.sendStatus(200)
      })
      .catch((e) => res.sendStatus(400))
    // use react-html-email to construct email
    // split message string along space and see if any string includes https:// http:// or www.
  } else {
    res.sendStatus(403)
  }
})
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
      const newMessages = Messages.filter(
        ({ ignored = false, completed }) => !ignored && !completed
      )
      console.log('messages', newMessages)
      res.status(200).send(newMessages)
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
messageRouter.patch('/ignore/:_id', async (req, res) => {
  console.log('ignore request')
  if (req.user.roles.includes('editor')) {
    console.log('is an editor')
    try {
      const Message = await message.findOneAndUpdate(
        { _id: req.params._id },
        { ignored: true }
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
