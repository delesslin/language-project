console.log('Starting server')
require('dotenv').config()
const PORT = process.env.PORT || 3333
const express = require('express')
const InitiateMongoServer = require('./config/db')
const forceSsl = require('./config/forceSsl.js')
const router = require('./routes/index.js')
const env = process.env.NODE_ENV || 'development'

console.log('----------------------------------------')

// init mongo server
InitiateMongoServer()

// Init express server
const app = express()
app.use(express.json())

// redirect to https
if (env === 'production') {
  app.use(forceSsl)
}

// Handle server requests
app.use('/', router)

// Start server
app.listen(PORT, async (e) => {
  if (e) throw e
  console.log(`Server listening on http://localhost:${PORT}`)
})
