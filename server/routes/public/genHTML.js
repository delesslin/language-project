const readPublic = require('./readPublic')

const genHTML = async ({ description, title, image, analytics }) => {
  return await readPublic().then((data) => {
    return data
      .replace(/{{analytics}}/gi, analytics)
      .replace(/{{title}}/gi, title)
      .replace(/{{description}}/gi, description)
      .replace(/{{image}}/gi, image)
  })
}
module.exports = genHTML
