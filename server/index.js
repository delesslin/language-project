console.log('Starting server')

const PORT = process.env.PORT || 3333
const express = require('express')
const { serveBuildFolder } = require('./config/serveBuildFolder')
const wordsRouter = require('./routes/words')
const InitiateMongoServer = require('./config/db')

console.log('----------------------------------------')
// init mongo server
InitiateMongoServer()

// Init express server
const app = express()
app.use(express.json())

// Handle API requests
app.use('/api', wordsRouter)

// Serve Build
serveBuildFolder(app, '/../app/build')

// const client = new MongoClient(CONNECTION_URL)

app.listen(PORT, async (e) => {
  if (e) throw e
  console.log(`Server listening on http://localhost:${PORT}`)
})
