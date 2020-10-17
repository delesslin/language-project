import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import FacebookIcon from '@material-ui/icons/Facebook'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset'
import { useHistory, useLocation } from 'react-router'
import media from 'css-in-js-media'
import { NavButton, Nav } from './Nav'
export const HeaderDiv = styled.header`
  padding: 10px;
  display: grid;
  grid-template-columns: auto repeat(6, 1fr);
  grid-column-gap: 15px;
  grid-template-rows: auto;
  grid-template-areas:
    'b title title title title title title'
    'b nav nav nav nav nav nav';
  // box-shadow: 0px 2px 5px #555;
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
  ${media('<phone')} {
    font-size: 1.2em;
  }
`
const Header = () => {
  const location = useLocation()
  const history = useHistory()
  return (
    <HeaderDiv>
      {location.pathname == '/' ? null : (
        <Back>
          <NavButton variant='transparent' to='/'>
            <ArrowBackIcon />
          </NavButton>
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
        <NavButton to='/game'>
          <VideogameAssetIcon />
        </NavButton>
      </Nav>
    </HeaderDiv>
  )
}

export default Header
