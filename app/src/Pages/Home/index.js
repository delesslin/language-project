import React, { useEffect } from 'react'
import { Container, Grid, CircularProgress } from '@material-ui/core'
import TagCard from './TagCard'
import { Words } from '../../context'

const Home = () => {
  const { words, tags, refetchWords } = React.useContext(Words.Context)

  if (tags.length > 0) {
    return (
      <Container>
        <Grid container spacing={3} justify='center'>
          {tags.map((tag) => {
            return <TagCard tag={tag} />
          })}
        </Grid>
      </Container>
    )
  } else {
    return (
      <Container>
        <CircularProgress />
      </Container>
    )
  }
}

export default Home
