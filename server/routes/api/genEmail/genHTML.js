const style = require('./style')
const greeting = 'Tanake'
const callToAction = `
<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
<tbody>
  <tr>
    <td align="left">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td> <a href="http://htmlemail.io" target="_blank">Call To Action</a> </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
`
const footer = `
<div class="footer">
<table role="presentation" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td class="content-block">
      <span class="apple-link">Company Inc, 3 Abbey Road, San Francisco CA 94102</span>
      <br> Don't like these emails? <a href="http://i.imgur.com/CScmqnj.gif">Unsubscribe</a>.
    </td>
  </tr>
  <tr>
    <td class="content-block powered-by">
      Powered by <a href="http://htmlemail.io">HTMLemail</a>.
    </td>
  </tr>
</table>
</div>
`
const genHTML = ({ title, name, date, response_message, request_message }) => {
  return `
  <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${title}</title>
    ${style}
  </head>
  <body class="">
    <span class="preheader">${title}</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>${
                          name != null ? `${greeting} ${name},` : `${greeting},`
                        }</p>
                        <p>On ${date} you submitted a request or issue on catawbalanguage.org. Here is a response: </p>
                        <p><strong>//</strong> </p>
                        <p><strong>${response_message}</strong> </p>
                        <p><strong>//</strong> </p>
                      </td>
                    </tr>
                    <tr>
                    <td><p></p></td>
                    </tr>
                    <tr>
                    <td>
                      <p><i><strong>Your original request:</strong></i></p>
                      <p><i>${request_message}</i></p>
                    </td>
                  </tr>
                  <tr>
                  <td>
                    <p><i><strong>PLEASE DO NOT RESPOND TO THIS EMAIL</strong></i></p>
                  </td>
                </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->

            <!-- END FOOTER -->

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
  `
}

module.exports = genHTML
