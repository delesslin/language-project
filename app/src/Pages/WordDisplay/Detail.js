import { ShareFB, ShareTwitter } from 'Components/Share'
import React from 'react'
import styled from 'styled-components'
import {
  Button,
  FacebookIcon,
  Paper,
  Text,
  TwitterIcon,
} from '../../Components'
const FBButton = styled(Button)``
const DetailPaper = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  margin-top: 10px;
`
const ShareDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  > * {
    margin: 5px;
  }
`
const series = (strArray) => {
  return strArray.reduce((acc, curr, i, arr) => {
    if (curr.length === 0) {
      return acc
    }
    if (i === 0) {
      return `${curr}`
    }
    return `${acc}, ${curr}`
  }, '')
}
const Detail = ({ word }) => {
  const quote = `${word.language_entry} (${word.translations[0]})`
  const pronunciations = series(word.pronunciation)
  const translations = series(word.translations)
  return (
    <DetailPaper color='transparent'>
      <Text size={2}>
        <b>{word.language_entry}</b>
      </Text>
      <Text size={1.3}>
        <i>{pronunciations}</i>
      </Text>
      <Text size={1.5}>{translations}</Text>
      {word.notes.length === 0 ? null : (
        <div>
          <Text size={1.3}>Notes:</Text>
          <Text as='ol'>
            {word.notes.map((Note) => {
              return <Text as='li'>{Note}</Text>
            })}
          </Text>
        </div>
      )}
      <ShareDiv>
        <ShareFB quote={quote}>
          <Button size='4' round={true} color='light'>
            <FacebookIcon />
          </Button>
        </ShareFB>
        <ShareTwitter title={quote}>
          <Button size='4' round={true} color='light'>
            <TwitterIcon />
          </Button>
        </ShareTwitter>
      </ShareDiv>
    </DetailPaper>
  )
}

export default Detail
