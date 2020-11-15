import { GameIcon, HomeIcon, KeyboardIcon, SearchIcon } from 'Components'
import media from 'css-in-js-media'
import React, { useEffect } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
// TODO: why is this here?

import { Button } from '../../Surfaces'
import { NavButton } from '../Nav'
import logo from './logo.png'

export const HeaderDiv = styled.header`
  display: grid;
  padding-right: 10px;
  grid-column-gap: 15px;
  grid-template-columns: repeat(6, 1fr) auto;
  grid-template-rows: 1fr;
  grid-template-areas: 'main main main main main main menu';
  position: relative;
  border-radius: 0px 0px 5px 5px;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primary};
  ${media('>tablet')} {
    grid-template-columns: repeat(5, 1fr);

    grid-template-areas: 'main main main nav nav';
  }
`
export const Title = styled.h1`
  grid-area: title;
  letter-spacing: 2px;
  font-size: 2rem;

  border-radius: 1px;
  color: ${({ theme }) => theme.dark};
  ${(props) => props.theme.fonts.primary};
  ${media('<phone')} {
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
  }
`

const MenuButton = styled(Button)`
  transition: all 0.3s;
  grid-area: menu;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  background-color: ${({ theme }) => theme.red};
  transform: rotate(${({ turned }) => (turned ? '0' : '90')}deg);
  opacity: ${({ turned }) => (turned ? '0.7' : '0.5')};
  ${media('>tablet')} {
    display: none;
  }
`
const NavDiv = styled.div`
  justify-self: end;
  grid-area: nav;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  place-items: center;
  grid-gap: 15px;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};

  position: absolute;

  ${media('<=tablet')} {
    transition: opacity 0.3s;
    grid-area: main;
    opacity: ${({ showing }) => (showing ? 1 : 0)};
    width: 100%;
  }
`
const TitleDiv = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'logo title';
  align-items: center;
`
const Logo = styled.img`
  grid-area: logo;
  height: 100px;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`
const HeaderTitle = styled(Title)`
  grid-area: title;
  ${media('<=tablet')} {
    font-size: 1.3rem;
  }
`

const Header = () => {
  const location = useLocation()
  const history = useHistory()
  const [hidden, setHidden] = React.useState(true)
  useEffect(() => {
    setHidden(true)
  }, [location.pathname])
  return (
    // prettier-ignore
    <HeaderDiv disabled={location.pathname === '/'}>
      <TitleDiv>

      <Logo onClick={() => history.push('/')} src={logo} />
      <HeaderTitle onClick={() => history.push('/')}>{'Catawba Language Project'.toUpperCase()}</HeaderTitle>
      </TitleDiv>

      <NavDiv showing={!hidden}>
        <NavButton to='/'>
          <HomeIcon />
        </NavButton>
        <NavButton to='/search'>
          <SearchIcon />
        </NavButton>
        <NavButton to='/game'>
          <GameIcon />
        </NavButton>
        <NavButton to='/type'>
          <KeyboardIcon size='20' />
        </NavButton>
      </NavDiv>
      <MenuButton
        onClick={() => setHidden((bool) => !bool)}
        turned={hidden}
        round={true}
      >
        <RiMenuFill />
      </MenuButton>
    </HeaderDiv>
  )
}

export default Header
