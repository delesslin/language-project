const express = require('express')
const apiRouter = require('./api')
const publicRouter = require('./public')
const router = express()

// Handle API requests
router.use('/api', apiRouter)

router.get('*', publicRouter)

module.exports = router
