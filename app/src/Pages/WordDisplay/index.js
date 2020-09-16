import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Words } from '../../context'
import { Typography, Grid, Container, Paper, styled } from '@material-ui/core'
import { WordEntry, Pronunciations, Translations } from './WordParts'

const WordDisplay = () => {
  const { _id } = useParams()
  const { words } = useContext(Words.Context)
  const [thisWord, setThisWord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const WordPaper = styled(Paper)({
    padding: '25px 20px',
  })
  // TODO: Handle Errors (e.g. no matching _id)
  // Refactor to util folder???
  useEffect(() => {
    console.log('words', words)
    // making sure the api has been fetched
    // without if block the app may attempt to find a match inside of a blank array, before API has returned response
    if (words.length > 0) {
      const word = words.find((el) => el._id === _id)
      console.log(word)
      setThisWord(word)
      setIsLoading(false)
    }
  }, [_id, words])
  if (isLoading) {
    return <h1>New word {_id}</h1>
  } else {
    // Implement thisWord.images
    // Implement thisWord.notes
    // Implement thisWord.recordings
    // implement thisWord.tags
    // implement thisWord.alternative_spellings
    // implement thisWord._id

    return (
      <Container>
        <WordPaper>
          <Grid container direction='column'>
            <Grid item>
              <img src={thisWord.images[0]} />
            </Grid>
            <WordEntry data={thisWord.language_entry} />
            <Pronunciations data={thisWord.pronunciation[0]} />
            <Translations data={thisWord.translations[0]} />
          </Grid>
        </WordPaper>
      </Container>
    )
  }
}

export default WordDisplay
