import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import { Paper } from '@material-ui/core'
export const Layout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  font-family: sans-serif;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 15px;

  header {
    grid-area: header;
  }
  main {
    grid-area: main;
  }
  footer {
    grid-area: footer;
  }
`
const GradientBackground = (opacity = 1) => `
background: rgb(255, 255, 255);
background: linear-gradient(292deg, rgba(233,112,85,${opacity}) 18%, rgba(233,148,170,${opacity}) 100%);
`
export const Header = styled.header`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'title title title title title title'
    'nav nav nav nav nav nav';
  box-shadow: 0px 2px 5px #555;
  border-radius: 0px 0px 5px 5px;

  ${GradientBackground(0.3)}
  ${media('>phone')} {
    // background-color: #00ffff;
    ${media('>tablet')} {
      grid-template-areas: 'title title title title nav nav';
      // background-color: #ffff00;
      ${media('>desktop')} {
        grid-template-areas: 'title title title title nav nav';
        // background-color: #ff00ff;
      }
    }
  }
`
export const Title = styled.h1`
  grid-area: title;
  ${media('<phone')} {
    font-size: 1.2em;
  }
`
export const Nav = styled.div`
  grid-area: nav;

  display: flex;
  align-items: center;
  ${media('>tablet')} {
    justify-content: flex-end;
  }
`

export const Footer = styled.footer`
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
  ${GradientBackground(0.1)}
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px -2px 5px #aaa;
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

export const Main = styled.main`
  padding: 0px 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'page page page page page page page page page page page page';
  ${media('>desktop')} {
    grid-template-areas: '... page page page page page page page page page page ...';
    ${media('>largeDesktop')} {
      grid-template-areas: '... ... page page page page page page page page ... ...';
    }
  }
`
export const Page = styled.div`
  grid-area: page;
  box-shadow: 2px 2px 5px #aaa;
  border-radius: 5px;
  padding: 20px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'title'
    'content';
`
export const PageTitle = styled.h2`
  grid-area: title;
  ${media('>=desktop')} {
    text-align: center;
  }
`
export const PageContent = styled.div`
  grid-area: content;
`
