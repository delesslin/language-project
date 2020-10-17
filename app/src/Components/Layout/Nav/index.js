import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components'
import media from 'css-in-js-media'
import React from 'react'
import hexRGB from 'hex-rgb'
import IconButton from './IconButton'
export const Nav = styled.div`
  grid-area: nav;

  display: flex;
  align-items: center;
  ${media('>tablet')} {
    justify-content: flex-end;
  }
`

export const NavButton = ({ to, children, href = '', variant }) => {
  const history = useHistory()
  const redirect = () => history.push(to)
  return (
    <IconButton onClick={redirect} href={href} variant={variant}>
      {children}
    </IconButton>
  )
}
