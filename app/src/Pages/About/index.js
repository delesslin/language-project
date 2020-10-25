import React from 'react'
import styled from 'styled-components'
import { Page, Text } from '../../Components'

const StyledPage = styled(Page)``
const About = () => {
  return (
    <StyledPage title='About'>
      <Text>
        This app was developed as part of the Catawba Language Project and was
        made possible by many supporters including the Institute of Museum and
        Library Services, Running Strong for American Indian, & the Alfred
        Landecker Fellowship.
      </Text>
      <br />
      <Text>
        The code was made using open-source and creative-commons technologies,
        including React, Express, Expo, Wikimedia, and hero-patterns.com
      </Text>
      <br />
      <Text>
        The code is in turn made freely available at{' '}
        <a href='http://git.delesslin.com/language-project'>Github</a>
      </Text>
    </StyledPage>
  )
}

export default About
