console.log('Starting server')
const PORT = 3333

const express = require('express')
const { serveBuildFolder } = require('./serveBuildFolder')
const { apiRouter } = require('./apiRouter')

// Init express server
const app = express()

// Handle API requests
app.use('/api', apiRouter)

// Serve Build
serveBuildFolder(app, '/../app/build')

// Start server
app.listen(PORT, (e) => {
  if (e) {
    console.error(e)
  }

  console.log(`Server running at: http://localhost:${PORT}`)
})
