import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import { FaKeyboard } from 'react-icons/fa'
import { RiMenuFill } from 'react-icons/ri'
import media from 'css-in-js-media'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import { hexColor } from '../../Buttons/IconButton'
import { Nav, NavButton } from '../Nav'
import { Button, Text } from '../../Surfaces'
import IconButton from '../../Buttons/IconButton'
import {
  KeyboardIcon,
  GameIcon,
  SearchIcon,
  HomeIcon,
} from '../../../Components'

export const HeaderDiv = styled.header`
  padding: 10px;
  display: grid;

  grid-column-gap: 15px;
  grid-template-columns: repeat(6, 1fr) auto;
  grid-template-rows: 1fr;
  grid-template-areas: 'main main main main main main menu';
  position: relative;
  border-radius: 0px 0px 5px 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  ${media('>tablet')} {
    grid-template-columns: repeat(5, 1fr);

    grid-template-areas: 'title title title nav nav';
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
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  position: absolute;
  justify-content: space-around;

  ${media('<=tablet')} {
    transition: opacity 0.3s;
    grid-area: main;
    opacity: ${({ showing }) => (showing ? 1 : 0)};
    width: 100%;
    display: flex;
  }
`
const Header = () => {
  const location = useLocation()
  const [hidden, setHidden] = React.useState(true)
  useEffect(() => {
    setHidden(true)
  }, [location.pathname])
  return (
    <HeaderDiv disabled={location.pathname == '/'}>
      <HeaderTitle>{'Catawba Language Project'.toUpperCase()}</HeaderTitle>

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
