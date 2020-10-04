import React from 'react'
import { Typography, Paper, styled, Grid, Button } from '@material-ui/core'
import StyledLink from '../../styled/StyledLink'
const FooterPaper = styled(Paper)({
  padding: '15px',
})
const FooterText = styled(Typography)({})
const Footer = () => {
  return (
    <FooterPaper>
      <Grid container justify='space-between'>
        <Grid item>
          <FooterText>
            <b>
              <i>A project of the Catawba Cultural Preservation Project</i>
            </b>
          </FooterText>
          <FooterText>
            <i>An entity of Catawba Indian Nation</i>
          </FooterText>
        </Grid>
        <Grid item>
          <StyledLink to='/admin'>
            <Button>admin</Button>
          </StyledLink>
        </Grid>
      </Grid>
    </FooterPaper>
  )
}

export default Footer
