import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import FacebookIcon from '@material-ui/icons/Facebook'
import { NavButton } from '../Nav'
export const FooterDiv = styled.footer`
  padding: 0px 10px 0px 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'nav  nav  nav  nav  nav  nav'
    'text text text text text text';
  ${media('>tablet')} {
    grid-template-areas: 'nav nav text text text text';
  }
  background-color: ${({ theme }) => theme.dark};
  border-radius: 5px 5px 0px 0px;
  // box-shadow: 0px -2px 5px #aaa;
`

export const FooterText = styled.p`
  grid-area: text;
  text-align: center;
  ${media('>tablet')} {
    text-align: right;
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

const Footer = () => {
  return (
    <FooterDiv>
      <FooterNav>
        <NavButton
          href='https://www.facebook.com/catawbalanguage'
          variant='light'
        >
          <FacebookIcon />
        </NavButton>
      </FooterNav>
      <FooterText>
        A project of the Catawba Cultural Preservation Project
      </FooterText>
    </FooterDiv>
  )
}

export default Footer
