const express = require('express')
const path = require('path')
const router = express()
const fs = require('fs')
const Word = require('../models/word')
const filePath = path.resolve(__dirname, '../../app/build', 'index.html')
router.use(express.static(path.resolve(__dirname, '../../app/build')))

const readPublic = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return console.log(err)
      }
      resolve(data)
    })
  })
}

const customizeHTML = async (
  description = 'Learn Catawba online!',
  title = 'Catawba Language Project',
  image = path.resolve(__dirname, '../../app/build', 'logo.png')
) => {
  return await readPublic()
    .then((data) => {
      return data.replace(/{{title}}/gi, title)
    })
    .then((data) => {
      return data.replace(/{{description}}/gi, description)
    })
    .then((data) => {
      return data.replace(/{{image}}/gi, image)
    })
}
router.get('/word/:_id', async ({ params }, res) => {
  const { _id } = params
  console.log(`got /word/${_id}`)
  const words = await Word.find({ _id })
  if (words.length > 0) {
    const { language_entry, images, translations } = words[0]
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
    let html = await customizeHTML(description, title, image)
    res.send(html)
  } else {
    let html = await customizeHTML()
    res.send(html)
  }
})
router.get('*', async (req, res) => {
  let html = await customizeHTML()
  res.send(html)
})

module.exports = router
