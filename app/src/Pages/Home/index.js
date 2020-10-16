import React, { useEffect, useState } from 'react'
import {
  Container,
  Grid,
  CircularProgress,
  Button,
  Typography,
} from '@material-ui/core'
import TagCard from './TagCard'
import { Words } from '../../context'
import styled from 'styled-components'
import Page from '../../Components/Page'
import { Card, CardGrid } from '../../styled/Card'
import Hero from './Hero'
const HomeGrid = styled.div`
  display: grid;
  grid-rows: 50vh auto;
  grid-auto-flow: rows;
  grid-gap: 50px;
`
const Home = () => {
  const { tags, words, isLoading } = React.useContext(Words.Context)
  const [currentIndex, setCurrentIndex] = useState(0)
  const incrementIndex = (x) => {
    if (currentIndex + x < 0) {
      setCurrentIndex(words.length + x)
    }
    if (currentIndex + x > words.length - 1) {
      setCurrentIndex(0)
    }
    setCurrentIndex((i) => i + x)
  }
  useEffect(() => {
    // alphabetize
    // Consolidate similar tags
    // select images for cards set as href
    const newCards = tags.reduce((acc, curr) => {
      // find index of word that has given tag or its pluralized form that has images.length > 0
      // if no index, return object with href=null
      // if index return obj with href=words
    }, [])
    // setCards
  }, [tags])

  // TODO: add RANDOM WORD for the top
  if (!isLoading) {
    return (
      <Page>
        <HomeGrid>
          <Hero word={words[currentIndex]} handleIncrement={incrementIndex} />
          <div>
            <Typography variant='h3'>BROWSE BY TOPIC</Typography>
            <CardGrid columns='5'>
              {tags.map(({ tag, image }, index) => {
                return (
                  <TagCard
                    key={tag}
                    tag={tag}
                    image={image}
                    i={index}
                  ></TagCard>
                )
              })}
            </CardGrid>
          </div>
        </HomeGrid>
      </Page>
    )

    // return (

    // )
    // return (
    //   <Container>
    //     <Grid container spacing={3} justify='center'>
    //       {tags.map((tag) => {
    //         return <TagCard key={tag} tag={tag} />
    //       })}
    //     </Grid>
    //   </Container>
    // )
  } else {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }
}

export default Home
