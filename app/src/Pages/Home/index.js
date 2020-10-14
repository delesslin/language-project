import React, { useEffect, useState } from 'react'
import { Container, Grid, CircularProgress, Button } from '@material-ui/core'
import TagCard from './TagCard'
import { Words } from '../../context'
import styled from 'styled-components'
import Page from '../../Components/Page'
import { CardGrid } from '../../styled/Card'

const Home = () => {
  const { tags, words, isLoading } = React.useContext(Words.Context)
  const [cards, setCards] = useState([])
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

  if (!isLoading) {
    return (
      <Page title='Browse'>
        <CardGrid columns='5'>
          {tags.map(({ tag, image }) => {
            return (
              <TagCard key={tag} tag={tag} image={image}>
                <Button variant='contained'>{tag}</Button>
              </TagCard>
            )
          })}
        </CardGrid>
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
