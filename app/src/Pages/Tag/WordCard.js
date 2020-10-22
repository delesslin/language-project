import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button, Chip, Paper, Player, Text } from '../../Components'
import media from 'css-in-js-media'
const CardPaper = styled(Paper)`
  min-height: 150px;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr auto auto;
  grid-template-areas: 'play word more' 'play english more' 'extra extra extra';
  place-items: center;
  padding: 10px;
  ${media('<phone')} {
    grid-template-rows: auto auto;
    grid-template-areas: 'play word .' 'more english .';
  }

  ${({ expanded }) =>
    expanded
      ? `
    // grid-column: 1 / 2;
    // transition: grid 0.5s;
    grid-row: 1 / 3;
    // width: 100%;
  `
      : ``}
`
const Play = styled(Player)`
  display: grid;
  place-items: center;
  grid-area: play;
`
const MoreButton = styled(Button)`
  grid-area: more;
`
const EntryPaper = styled(Chip)`
  padding: 20px 50px;
  border-radius: 2px;
  grid-area: word;
`
const InfoPaper = styled(Paper)`
  grid-area: english;
  padding: 15px 40px;
  border-radius: 2px;
`

const WordCard = ({ data, href, link, children }) => {
  const history = useHistory()
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () => {
    history.push(link)

    // setIsExpanded((isExpanded) => !isExpanded)
  }

  return (
    <CardPaper href={href} expanded={isExpanded}>
      {data.recordings.length < 1 ? null : (
        <Play base64={data.recordings[0]} color='green'>
          <RecordVoiceOverIcon />
        </Play>
      )}

      <EntryPaper>
        <Text>
          <b>{data.language_entry}</b>
        </Text>
      </EntryPaper>
      <InfoPaper color='secondary'>
        <Text>{data.translations[0]}</Text>
      </InfoPaper>

      <MoreButton round={true} onClick={handleClick} color='light'>
        <MoreHorizIcon />
      </MoreButton>
    </CardPaper>
  )
}

export default WordCard
