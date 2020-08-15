const express = require('express')
const path = require('path')
const serveBuildFolder = (expressApp, relativePath) => {
  expressApp.use(express.static(path.join(__dirname, relativePath)))
  // Handles any requests that don't match the ones above
  expressApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + `${relativePath}/index.html`))
  })
}
exports.serveBuildFolder = serveBuildFolder