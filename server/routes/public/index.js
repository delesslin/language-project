const express = require('express')
const path = require('path')
const router = express()
const Word = require('../../models/word')
const genHTML = require('./genHTML')
const { IMAGE, DESCRIPTION, TITLE } = require('./defaults.js')
const customizeHTML = (args) => {
  return genHTML({
    ...args,
    analytics: `<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QJMKBWMM3J"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-QJMKBWMM3J');
    </script>`,
  })
}
// const default_img =
//   'https://language-project-app.herokuapp.com/static/media/logo.a2754d4a.png'
// const default_description = 'Learn Catawba online!'
// const default_title = 'Catawba Language Project'
router.get('/admin', async (req, res) => {
  let title = '🔒 Admin Portal for Catawba Language Project'
  let description = 'Only available on Desktop. Must have username & password'
  let image = IMAGE
  let html = await customizeHTML({ description, title, image })
  res.send(html)
})

router.get('/about', async (req, res) => {
  let title = 'About the Catawba Language Project'
  let description =
    'An Open-Source project of the Catawba Cultural Center, a division of Catawba Indian Nation.'
  let image = IMAGE
  let html = await customizeHTML({ description, title, image })
  res.send(html)
})
router.get('/game', async (req, res) => {
  let title = 'Practice Catawba'
  let description = 'Play games to practice Catawba!'
  let image = IMAGE
  let html = await customizeHTML({ description, title, image })
  res.send(html)
})
router.get('/type', async (req, res) => {
  let title = 'Catawba Keyboard'
  let description = 'Type using Catawba characters'
  let image = IMAGE
  let html = await customizeHTML({ description, title, image })
  res.send(html)
})
router.get('/search/:_term?', async (req, res) => {
  console.log('server here')
  const { _term } = req.params
  console.log('_term', _term)
  let title = _term == null ? 'Search' : `Search for '${_term}'`
  let description =
    _term == null
      ? 'Find Catawba translations'
      : `Find Catawba translations for '${_term}'!`
  let image = IMAGE
  let html = await customizeHTML({ description, title, image })
  res.send(html)
})
router.get('/word/:_id', async ({ params }, res) => {
  const { _id } = params
  console.log(`got /word/${_id}`)
  const words = await Word.find({ _id })
  if (words.length > 0) {
    const { language_entry, images, translations } = words[0]
    const image =
      images.length > 0 && images[0].length > 0 ? images[0] : default_img
    const title = language_entry
    const description = translations.reduce((acc, curr) => {
      if (acc.length < 1) {
        // TODO: Title case
        return curr
      } else {
        return `${acc}, ${curr}`
      }
    }, '')
    let html = await customizeHTML({ description, title, image })
    res.send(html)
  } else {
    let html = await customizeHTML({
      description: DESCRIPTION,
      title: TITLE,
      image: IMAGE,
    })
    res.send(html)
  }
})
// TODO: /tags/headstart

// the '/:other' feels hackish, but '/' doesn't work for eg '/search' and '*' doesn't work at all
router.get('/:other', async (req, res) => {
  console.log('gotten')
  let html = await customizeHTML({
    description: DESCRIPTION,
    title: TITLE,
    image: IMAGE,
  })
  // console.log(html)
  res.send(html)
})

router.get('/', async (req, res) => {
  console.log('/')
  let html = await customizeHTML({
    description: DESCRIPTION,
    title: TITLE,
    image: IMAGE,
  })
  // console.log(html)
  res.send(html)
})
// Must come after other routes
router.use(express.static(path.resolve(__dirname, '../../../app/build')))

module.exports = router
