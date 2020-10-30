import media from 'css-in-js-media'
import React, { useEffect } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { useHistory, useLocation } from 'react-router'
import styled, { keyframes } from 'styled-components'
import logo from './logo.png'
import {
  GameIcon,
  HomeIcon,
  KeyboardIcon,
  SearchIcon,
} from '../../../Components'
import { hexColor } from '../../Buttons/IconButton'
import { Button } from '../../Surfaces'
import { NavButton } from '../Nav'

export const HeaderDiv = styled.header`
  display: grid;
  padding-right: 10px;
  grid-column-gap: 15px;
  grid-template-columns: auto repeat(6, 1fr) auto;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo main main main main main main menu';
  position: relative;
  border-radius: 0px 0px 5px 5px;
  align-items: center;
  overflow: hidden;
  background-color: ${({ theme }) => theme.primary};
  ${media('>tablet')} {
    grid-template-columns: auto repeat(5, 1fr);

    grid-template-areas: 'logo title title title nav nav';
  }
`
export const Title = styled.h1`
  grid-area: title;
  letter-spacing: 2px;
  font-size: 2rem;

  border-radius: 1px;
  ${({ theme }) => `color: ${hexColor(theme.dark, 1)};`}
  ${(props) => props.theme.fonts.primary};
  ${media('<phone')} {
    font-size: 1.2rem;
  }
  &:hover {
    cursor: pointer;
  }
`

const HeaderTitle = styled(Title)`
  ${media('<=tablet')} {
    font-size: 1.3rem;
    grid-area: main;
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
  background-color: ${({ theme }) => theme.primary};

  position: absolute;

  ${media('<=tablet')} {
    transition: opacity 0.3s;
    grid-area: main;
    opacity: ${({ showing }) => (showing ? 1 : 0)};
    width: 100%;
  }
`
const Logo = styled.img`
  height: 100px;
  width: 100px;
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
      <Logo src={logo} />
      <HeaderTitle onClick={() => history.push('/')}>{'Catawba Language Project'.toUpperCase()}</HeaderTitle>

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
