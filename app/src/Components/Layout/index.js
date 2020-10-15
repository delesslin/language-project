import { IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import FacebookIcon from '@material-ui/icons/Facebook'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import {
  Header,
  Layout as StyledLayout,
  Nav,
  Title,
  Footer,
  FooterText,
  FooterNav,
  Main,
  Page,
  PageContent,
  PageTitle,
  Back,
} from '../../styled/Layout'

const NavButton = ({ to, children }) => {
  const history = useHistory()
  const redirect = () => history.push(to)
  return <IconButton onClick={redirect}>{children}</IconButton>
}

const Layout = ({ children }) => {
  const location = useLocation()
  const history = useHistory()
  return (
    <StyledLayout>
      <Header>
        {location.pathname == '/' ? null : (
          <Back>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIcon />
            </IconButton>
          </Back>
        )}
        <Title>Catawba Language Project</Title>
        <Nav>
          <NavButton to='/'>
            <HomeIcon />
          </NavButton>
          <NavButton to='/search'>
            <SearchIcon />
          </NavButton>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterNav>
          <NavButton to='https://www.facebook.com/catawbalanguage'>
            <FacebookIcon />
          </NavButton>
        </FooterNav>
        <FooterText>
          A project of the Catawba Cultural Preservation Project
        </FooterText>
      </Footer>
    </StyledLayout>
  )
}

export default Layout
