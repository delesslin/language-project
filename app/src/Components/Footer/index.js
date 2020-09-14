import React from 'react'
import { Typography, Paper, styled } from '@material-ui/core'
const FooterPaper = styled(Paper)({
  padding: '15px',
})
const FooterText = styled(Typography)({})
const Footer = () => {
  return (
    <FooterPaper>
      <FooterText align='center'>
        <b>
          <i>A project of the Catawba Cultural Preservation Project</i>
        </b>
      </FooterText>
      <FooterText align='center'>
        <i>An entity of Catawba Indian Nation</i>
      </FooterText>
    </FooterPaper>
  )
}

export default Footer
