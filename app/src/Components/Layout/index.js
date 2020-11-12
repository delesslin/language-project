import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'
const StyledLayout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  font-family: sans-serif;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 30px;

  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
`
const Main = styled.main`
  display: grid;
  grid-template-columns: 5% 1fr 5%;
  grid-template-areas: '. page .';
`
const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
