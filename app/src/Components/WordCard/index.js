import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import CardPaper from '../../styled/Card/CardPaper'
import { SearchResult } from '../../styled/Content'
import { SearchResultText } from '../../styled/Content/Search'
import IconButton from '../Layout/Nav/IconButton'
import Player from '../Player'
import ChipBag from './ChipBag'
const ImagePaper = styled(CardPaper)`
  grid-area: pic;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const WordCard = ({ word, expanded = false, fullscreen = false, to = '' }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  return (
    <SearchResult fullscreen={fullscreen}>
      <ImagePaper href={word.images && word.images[0]}>
        {word.recordings.length > 0 ? (
          <Player base64={word.recordings[0]} />
        ) : null}
        {expanded ? null : (
          <IconButton onClick={handleClick} variant='red'>
            <MoreHorizIcon />
          </IconButton>
        )}
      </ImagePaper>
      <SearchResultText>
        <h3>{word.language_entry}</h3>
        <h5>({word.pronunciation[0]})</h5>
        <h4>{word.translations[0]}</h4>

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
      </SearchResultText>
    </SearchResult>
  )
}

export default WordCard
