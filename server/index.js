console.log('Starting server')
require('dotenv').config()
const PORT = process.env.PORT || 3333
const express = require('express')
const sslRedirect = require('heroku-ssl-redirect')

const apiRouter = require('./routes/index.js')
const publicRouter = require('./routes/public/index.js')
const InitiateMongoServer = require('./config/db')

console.log('----------------------------------------')

// init mongo server
InitiateMongoServer()

// Init express server
const app = express()
app.use(express.json())

// redirect to https
app.use(sslRedirect())
// Handle API requests
app.use('/api', apiRouter)

app.get('*', publicRouter)

app.listen(PORT, async (e) => {
  if (e) throw e
  console.log(`Server listening on http://localhost:${PORT}`)
})
