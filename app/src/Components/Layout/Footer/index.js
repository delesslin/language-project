import React from 'react'
import styled from 'styled-components'
import { FacebookIcon, InfoIcon, LockIcon } from '../../'
import { NavButton, NavLink } from '../Nav'

export const FooterDiv = styled.footer`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.dark};
  border-radius: 5px 5px 0px 0px;
`

const Footer = () => {
  return (
    <FooterDiv>
      <NavLink href='https://www.facebook.com/catawbalanguage' color='light'>
        <FacebookIcon />
      </NavLink>
      <NavButton to='/about' color='light'>
        <InfoIcon />
      </NavButton>

      <NavButton color='light' to='/admin'>
        <LockIcon />
      </NavButton>
    </FooterDiv>
  )
}

export default Footer
