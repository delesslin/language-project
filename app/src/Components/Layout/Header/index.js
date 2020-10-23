import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import media from 'css-in-js-media'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import { hexColor } from '../../Buttons/IconButton'
import { Nav, NavButton } from '../Nav'
import { FaKeyboard } from 'react-icons/fa'
import { Text } from '../../Surfaces'

export const HeaderDiv = styled.header`
  padding: 10px;
  display: grid;
  grid-template-columns: ${(props) => (props.disabled ? '0px' : 'auto')} repeat(
      6,
      1fr
    );
  grid-column-gap: 15px;
  grid-template-rows: auto auto;
  grid-template-areas:
    'b title title title title title title'
    'b nav nav nav nav nav nav';

  border-radius: 0px 0px 5px 5px;

  background-color: ${({ theme }) => theme.primary};
  ${media('>phone')} {
    // background-color: #00ffff;
    ${media('>tablet')} {
      grid-template-areas: 'b title title title title nav nav';
      // background-color: #ffff00;
      ${media('>desktop')} {
        grid-template-areas: 'b title title title title nav nav';
        // background-color: #ff00ff;
      }
    }
  }
`
export const Back = styled.div`
  display: grid;
  place-items: center;
  grid-area: b;
  width: auto;
  ${(props) => {
    console.log(props.disabled)
    if (props.disabled) {
      return `width: 0%;
        overflow: hidden;
      `
    }
  }}
`
export const Title = styled.h1`
  grid-area: title;
  letter-spacing: 2px;
  font-size: 2rem;

  border-radius: 1px;
  ${({ theme }) => `color: ${hexColor(theme.dark, 1)};`}
  ${(props) => props.theme.fonts.primary}
  ${media('<phone')} {
    font-size: 1.2rem;
  }
`
const HeaderNav = styled.div`
  grid-area: nav;
  place-items: center;
`
const Header = () => {
  const location = useLocation()
  const history = useHistory()
  return (
    <HeaderDiv disabled={location.pathname == '/'}>
      <Title angle={1}>{'Catawba Language Project'.toUpperCase()}</Title>

      <Nav>
        <NavButton to='/'>
          <HomeIcon />
        </NavButton>
        <NavButton to='/search'>
          <SearchIcon />
        </NavButton>
        <NavButton to='/game'>
          <VideogameAssetIcon />
        </NavButton>
        <NavButton to='/type'>
          <Text size={1.5}>
            <FaKeyboard />
          </Text>
        </NavButton>
      </Nav>
    </HeaderDiv>
  )
}

export default Header
