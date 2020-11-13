const express = require('express')
const path = require('path')
const router = express()
const fs = require('fs')
const Word = require('../models/word')
const filePath = path.resolve(__dirname, '../../app/build', 'index.html')

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
// const default_img = path.resolve(__dirname, '../../app/public', 'logo.png')
const default_img = path.resolve('logo.png')

const default_description = 'Learn Catawba online!'
const default_title = 'Catawba Language Project'
const customizeHTML = async (
  description = default_description,
  title = default_title,
  image = default_img
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
router.get('/logo.png', (req, res) => {
  res.sendFile(path.resolve('build/logo.png'))
})

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
// the '/:other' feels hackish, but '/' doesn't work for eg '/search' and '*' doesn't work at all
router.get('/:other', async (req, res) => {
  console.log('gotten')
  let html = await customizeHTML(
    default_description,
    default_title,
    default_img
  )
  // console.log(html)
  res.send(html)
})

router.get('/', async (req, res) => {
  console.log('gotten')
  let html = await customizeHTML(
    default_description,
    default_title,
    default_img
  )
  // console.log(html)
  res.send(html)
})
// Must come after other routes
router.use(express.static(path.resolve(__dirname, '../../app/build')))

module.exports = router
