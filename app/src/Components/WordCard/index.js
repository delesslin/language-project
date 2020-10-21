import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import React from 'react'
import styled from 'styled-components'
import useAPI from '../../utils/hooks/useAPI'
import Player from '../Player'
import { Button } from '../Surfaces/Button'
import { Paper } from '../Surfaces/Paper'
import { Text } from '../Surfaces/Text'
import ChipBag from './ChipBag'

const WordPaper = styled(Paper)`
  display: grid;
  min-height: 70vh;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'play content';
  place-items: center;
`
const PlayerButton = styled(Button)`
  grid-area: play;
`
const ContentPaper = styled(Paper)`
  grid-area: content;
  place-self: stretch;
`
// const Entry = styled(Paper)`
//   grid-area: entry;
//   padding: 40px 70px;
// `
// const Translation = styled(Paper)`
//   grid-area: translation;
// `
// const Pronunciation = styled(Paper)`
//   grid-area: pronunciation;
// `

const WordCard = ({ word, expanded = false, fullscreen = false, to = '' }) => {
  const history = useAPI()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  return (
    <WordPaper href={word.images && word.images[0]}>
      {word.recordings.length > 0 ? (
        <PlayerButton round>
          <Player base64={word.recordings[0]}>
            <RecordVoiceOverIcon />
          </Player>
        </PlayerButton>
      ) : null}
      <ContentPaper>
        <Text>{word.language_entry}</Text>
        <Text>{word.pronunciation[0]}</Text>
        <Text>{word.translations[0]}</Text>

        {!expanded ? null : (
          <>
            <ChipBag
              label='alternative spellings'
              chips={word.alternative_spellings}
            />
            <ChipBag label='notes' chips={word.notes} />
          </>
        )}
        <ChipBag
          label='tags'
          chips={word.tags}
          hrefGen={(tag) => `/tags/${tag}`}
        />
      </ContentPaper>
    </WordPaper>
  )
}

export default WordCard
