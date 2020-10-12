import { Chip, Fab, IconButton, Paper, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { SearchResult } from '../../styled/Content'
import {
  ResultTags,
  SearchAudio,
  SearchImage,
  SearchResultText,
} from '../../styled/Content/Search'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useHistory } from 'react-router-dom'
import Player from '../Player'
import ChipBag from './ChipBag'

// const CircleImg = styled.img`
//   border-radius: 100%;
//   height: 50px;
//   margin: 0px;
//   padding: 0px;
//   float: left;
//   padding-right: 15px;
// `
// const ResultDiv = styled(Paper)`
//   padding: 10px 0px;
// `

const WordTypo = styled(Typography)`
  font-weight: bold;
`
const PronTypo = styled(Typography)`
  font-style: italic;
`

const WordCard = ({ word, expanded = false, fullscreen = false }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  return (
    <SearchResult fullscreen={fullscreen}>
      <SearchImage href={word.images[0]}></SearchImage>
      {word.recordings.length > 0 ? (
        <SearchAudio>
          <Player base64={word.recordings[0]} />
        </SearchAudio>
      ) : null}
      <SearchResultText>
        <h3>{word.language_entry}</h3>
        <h5>({word.pronunciation[0]})</h5>
        <h4>{word.translations[0]}</h4>

        {!expanded ? (
          <div>
            <IconButton onClick={handleClick}>
              <MoreHorizIcon />
            </IconButton>
          </div>
        ) : (
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
