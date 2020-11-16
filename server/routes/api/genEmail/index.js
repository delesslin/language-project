const genHTML = require('./genHTML')
const genEmail = ({ name, createdAt, response_message, request_message }) => {
  const title = `Response to your request on catawbalanguage.org`
  const text = `Tanake ${name}, Please see our response to your request from ${createdAt}: ${response_message}`

  const html = genHTML({
    title,
    response_message,
    date: createdAt,
    name,
    request_message,
  })
  return { text, html }
}

module.exports = genEmail
