console.log('Starting server')
require('dotenv').config()
const PORT = process.env.PORT || 3333
const express = require('express')
const { serveBuildFolder } = require('./serveBuildFolder')
const apiRouter = require('./routes/index.js')
const InitiateMongoServer = require('./config/db')

console.log('----------------------------------------')
// init mongo server
InitiateMongoServer()

// Init express server
const app = express()
app.use(express.json())

// Handle API requests
app.use('/api', apiRouter)

// Serve Build
serveBuildFolder(app, '/../app/build')

// const client = new MongoClient(CONNECTION_URL)

app.listen(PORT, async (e) => {
  if (e) throw e
  console.log(`Server listening on http://localhost:${PORT}`)
})
