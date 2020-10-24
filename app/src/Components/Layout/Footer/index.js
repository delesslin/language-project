import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import FacebookIcon from '@material-ui/icons/Facebook'
import { NavButton, NavLink } from '../Nav'
import LockIcon from '@material-ui/icons/Lock'
import IconButton from '../../Buttons/IconButton'
export const FooterDiv = styled.footer`
  padding: 0px 10px 0px 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;

  grid-template-areas:
    'nav  nav  nav  nav  nav  nav'
    'text text text text text text'
    'admin admin admin admin admin admin';
  ${media('>tablet')} {
    grid-template-areas: 'nav nav text text admin admin';
  }
  background-color: ${({ theme }) => theme.dark};
  border-radius: 5px 5px 0px 0px;
  // box-shadow: 0px -2px 5px #aaa;
`

export const FooterText = styled.div`
  grid-area: text;
  display: grid;
  place-items: center;
  > p {
    text-align: center;
    ${({ theme }) => `color: ${theme.light}`}
  }
`
export const FooterNav = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  ${media('<tablet')} {
    justify-content: center;
  }
`
const AdminButton = styled.div`
  grid-area: admin;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media('<desktop')} {
    display: none;
  }
`
const Footer = () => {
  return (
    <FooterDiv>
      <FooterNav>
        <NavLink
          href='https://www.facebook.com/catawbalanguage'
          variant='light'
        >
          <FacebookIcon />
        </NavLink>
      </FooterNav>
      <FooterText>
        <p>A project of the Catawba Cultural Preservation Project</p>
      </FooterText>
      <AdminButton>
        <NavButton variant='primary' to='/admin'>
          <LockIcon />
        </NavButton>
      </AdminButton>
    </FooterDiv>
  )
}

export default Footer
