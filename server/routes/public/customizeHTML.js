const readPublic = require('./readPublic')

const customizeHTML = async ({ description, title, image }) => {
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
exports.customizeHTML = customizeHTML
