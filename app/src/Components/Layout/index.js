import React from 'react'
import styled from 'styled-components'
import { Layout as StyledLayout } from '../../styled/Layout'
import Footer from './Footer'
import Header from './Header'
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
