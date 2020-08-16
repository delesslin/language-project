const express = require('express')
const fetch = require('node-fetch')
const apiRouter = express.Router()
apiRouter.get('/test', (req, res) => {
  res.send('1234 Api!')
})

apiRouter.get('/word', async (req, res) => {
  const answer = await getBigFile('apple')
  res.send(answer)
})

apiRouter.post('/new-word', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

const getBigFile = async (a) => {
  //THIS MIGHT TAKE 10 SECONDS!!!!!!
  const url = 'https://baconipsum.com/api/?type=meat-and-filler'
  const data = await fetch(url)
  return data.json()
}

// TODO: Authentication for admins
// TODO: ABility to retrieve words based on query
// TODO: Add new word
// TODO: Edit Word
// TODO: Delete Word

// CRUD: CREATE, READ, UPDATE, DELETE
exports.apiRouter = apiRouter

// MERN MongoDB, Express, React, Node
