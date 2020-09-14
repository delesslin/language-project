import React, { useEffect } from 'react'
import { Container, Grid, CircularProgress } from '@material-ui/core'
const getWords = async () => {
  const res = await fetch('/api/words')
  return res.json()
}
const Home = () => {
  const [words, setWords] = React.useState([])
  const [tags, setTags] = React.useState([])
  // useEffect get data and set state
  useEffect(() => {
    console.log('fetching...')
    getWords().then((data) => {
      console.log(data)
      setWords(data)
    })
  }, [])

  // useEffect .reduce words into tags
  useEffect(() => {
    if (words.length > 0) {
      const newTagsArr = words.reduce((acc, curr) => {
        curr.tags.forEach((el) => {
          if (!acc.includes(el)) {
            acc.push(el)
          }
        })
        return acc
      }, [])

      setTags(newTagsArr)
    }
  }, [words])

  useEffect(() => {
    console.log('tags', tags)
  }, [tags])
  if (tags.length > 0) {
    return (
      <Container>
        <Grid container spacing={3}>
          {tags.map((tag) => {
            return (
              <Grid item key={tag}>
                {tag}
              </Grid>
            )
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
