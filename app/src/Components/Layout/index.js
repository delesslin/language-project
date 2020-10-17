import React from 'react'
import { Layout as StyledLayout, Main } from '../../styled/Layout'
import Footer from './Footer'
import Header from './Header'

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
