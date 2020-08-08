console.log('Starting server')
const PORT = 3333

const express = require('express')
const { serveBuildFolder } = require('./serveBuildFolder')

const app = express()

serveBuildFolder(app, '/../app/build')

app.listen(PORT, (e) => {
  if (e) {
    console.error(e)
  }

  console.log(`Server running at: http://localhost:${PORT}`)
})
