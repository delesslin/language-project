import React from 'react'
import Header from '../Header'
import { Grid, Container } from '@material-ui/core'
import Footer from '../Footer'
import styled from 'styled-components'
const MasterGrid = styled(Grid)`
  min-height: 100vh;
  flex-direction: column;
`
const ContentGrid = styled(Grid)`
  flex: 1 0 auto;
  margin-top: 20px;
`
const FooterGrid = styled(Grid)`
  flex-shrink: 0;
`
// const MasterGrid = styled(Grid)({
//   minHeight: '100vh',
//   flexDirection: 'column',
// })
// const ContentGrid = styled(Grid)({
//   flex: '1 0 auto',
//   marginTop: '20px',
// })
// const FooterGrid = styled(Grid)({
//   flexShrink: 0,
// })
const Layout = ({ children }) => {
  return (
    <MasterGrid container>
      <Grid item>
        <Header />
      </Grid>
      <ContentGrid item>
        <Container>{children}</Container>
      </ContentGrid>
      <FooterGrid item>
        <Footer />
      </FooterGrid>
    </MasterGrid>
  )
}

export default Layout
