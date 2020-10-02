import { Chip, Container, Grid, Paper } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Words } from '../../context'
import { Pronunciations, Translations, WordEntry } from './WordParts'
import Image from '../../styled/Image'
import styled from 'styled-components'
import Sound from './Sound'
import Id from './Id'
import Tags from './Tags'
import AltSpellings from './AltSpellings'
import Notes from './Notes'
import Loading from '../../Components/Loading'
import Request from '../Request'
const WordPaper = styled(Paper)`
  padding: 25px 20px;
`
const WordGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  row-gap: 15px;
`
const StyledImage = styled(Image)`
  grid-column: 1 / 2;
`
const InfoContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  row-gap: 1px;
`
const TagContainer = styled.div`
  grid-column: 1 / 3;
`
const WordDisplay = () => {
  const { _id } = useParams()
  const { words } = useContext(Words.Context)
  const [thisWord, setThisWord] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // TODO: Handle Errors (e.g. no matching _id)
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
  // TODO: implement loading
  if (isLoading) {
    return <Loading />
  } else {
    if (thisWord === undefined) {
      return <Request />
    }
    return (
      <Container>
        <WordPaper>
          <WordGrid>
            {thisWord.images.length > 0 ? (
              <StyledImage
                src={thisWord.images[0]}
                alt={`visual of ${thisWord.translations[0]}`}
                size='300px'
              />
            ) : null}
            <InfoContainer>
              <Sound data={thisWord.recordings} />
              <WordEntry data={thisWord.language_entry} />
              <Pronunciations data={thisWord.pronunciation[0]} />
              <Translations data={thisWord.translations[0]} />
              <AltSpellings data={thisWord.alternative_spellings} />
              <Notes data={thisWord.notes} />
            </InfoContainer>
            <TagContainer>
              <Tags data={thisWord.tags} />
            </TagContainer>
          </WordGrid>
          <Id>{thisWord._id}</Id>
        </WordPaper>
      </Container>
    )
  }
}

export default WordDisplay
