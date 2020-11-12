const express = require('express')
const fs = require('fs')
const path = require('path')
const Word = require('./models/word')
const serveBuildFolder = (expressApp, relativePath) => {
  expressApp.use(express.static(path.join(__dirname + relativePath)))
  // expressApp.use(express.static(relativePath))
  expressApp.get('/word/:_id', async ({ params }, res) => {
    // Create description, image, and title
    const { _id } = params
    console.log(`got /word/${_id}`)
    // handle errors
    const [word] = await Word.find({ _id })
    const { images, language_entry, translations } = word
    const image = images[0]
    const title = language_entry
    const description = translations.reduce((acc, curr) => {
      if (acc.length < 1) {
        // TODO: Title case
        return curr
      } else {
        return `${acc}, ${curr}`
      }
    }, '')
    const filePath = path.resolve(__dirname, '../app/build', 'index.html')
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return console.log(err)
      }
      data = data.replace(/{{title}}/, title)
      data = data.replace(/{{description}}/, description)
      data = data.replace(/{{image}}/, image)
      res.send(data)
    })
    // res.sendFile(path.join(__dirname + `${relativePath}/index.html`))
  })
  // Handles any requests that don't match the ones above
  expressApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + `${relativePath}/index.html`))
  })
}
exports.serveBuildFolder = serveBuildFolder
