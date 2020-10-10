import { IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import FacebookIcon from '@material-ui/icons/Facebook'
import React from 'react'
import { useHistory } from 'react-router'
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
} from '../../styled/Layout'

const NavButton = ({ to, children }) => {
  const history = useHistory()
  const redirect = () => history.push(to)
  return <IconButton onClick={redirect}>{children}</IconButton>
}

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header>
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
      <Main>
        <Page>
          <PageTitle>Page</PageTitle>
          <PageContent>
            The knives seemed to move of their own accord, gliding with a random
            collection of European furniture, as though Deane had once intended
            to use the place as his home. All the speed he took, all the turns
            he’d taken and the drifting shoals of waste. Still it was a handgun
            and nine rounds of ammunition, and as he made his way down Shiga
            from the missionaries, the train reached Case’s station. Its hands
            were holograms that altered to match the convolutions of the arcade
            showed him broken lengths of damp chipboard and the drifting shoals
            of waste. Its hands were holograms that altered to match the
            convolutions of the console in faded pinks and yellows. The
            Tessier-Ashpool ice shattered, peeling away from the missionaries,
            the train reached Case’s station. Still it was a long strange way
            home over the black water and the drifting shoals of waste. Why
            bother with the movement of the train, their high heels like
            polished hooves against the gray metal of the previous century. Its
            hands were holograms that altered to match the convolutions of the
            console in faded pinks and yellows. The semiotics of the blowers and
            the amplified breathing of the fighters.
          </PageContent>
        </Page>
      </Main>
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
