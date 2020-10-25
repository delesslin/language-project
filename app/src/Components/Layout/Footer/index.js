import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import FacebookIcon from '@material-ui/icons/Facebook'
import { NavButton, NavLink } from '../Nav'
import LockIcon from '@material-ui/icons/Lock'
import IconButton from '../../Buttons/IconButton'
import { InfoIcon } from '../../Surfaces/Icon'
export const FooterDiv = styled.footer`
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.dark};
  border-radius: 5px 5px 0px 0px;
`

const Footer = () => {
  return (
    <FooterDiv>
      <NavLink href='https://www.facebook.com/catawbalanguage' variant='light'>
        <FacebookIcon />
      </NavLink>
      <NavButton variant='light' to='/about'>
        <InfoIcon />
      </NavButton>

      <NavButton variant='primary' to='/admin'>
        <LockIcon />
      </NavButton>
    </FooterDiv>
  )
}

export default Footer
