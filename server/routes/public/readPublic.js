const path = require('path')

const fs = require('fs')

const filePath = path.resolve(__dirname, '../../../app/build', 'index.html')

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

module.exports = readPublic
