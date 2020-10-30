import React from 'react'
import styled from 'styled-components'
import { Feedback, Page, Text } from '../../Components'
const Paragraph = styled(Text)`
  place-self: stretch;
  text-align: left;
`
const StyledPage = styled(Page)``
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: column;
  grid-gap: 10px;
  place-items: stretch;
`
const About = () => {
  return (
    <StyledPage title='About'>
      <AboutGrid>
        <Paragraph>
          This app was developed as part of the Catawba Language Project and was
          made possible by many supporters including the Institute of Museum and
          Library Services, Running Strong for American Indian, & the Alfred
          Landecker Fellowship.
        </Paragraph>

        <Paragraph>
          The code was made using open-source and creative-commons technologies,
          including React, Express, Expo, Wikimedia, and hero-patterns.com
        </Paragraph>

        <Paragraph>
          The code is in turn made freely available at
          <a href='http://git.delesslin.com/language-project'>Github</a>
        </Paragraph>
        <Feedback />
      </AboutGrid>
    </StyledPage>
  )
}

export default About
