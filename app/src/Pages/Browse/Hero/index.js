import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import media from 'css-in-js-media'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

import { Button, Paper, Player } from '../../../Components'
import Content from './Content'

const HeroPaper = styled(Paper)`
  display: grid;
  place-items: center;
  min-height: 300px;
  grid-template-columns: 100px 1fr 1fr 100px;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'back content content next' 'back play more next';
  ${media('>tablet')} {
    grid-template-columns: 100px 1fr 1fr 1fr 100px;
    grid-template-areas: 'back play content more next';
  }
`
const Play = styled(Player)`
  grid-area: play;
  place-self: center;
  display: grid;
  place-items: center;
  display: grid;
  place-items: center;
  &:hover {
    bottom: -30px;
    box-shadow: 3px 3px 2px #000;
  }
  bottom: -20px;
  box-shadow: 2px 2px 2px #000;
  ${media('>tablet')} {
    width: 150px;
    height: 150px;
    bottom: 0px;
    &:hover {
      bottom: -10px;
    }
  }
`
const More = styled(Button)`
  grid-area: more;
  position: relative;
  transition: all 0.2s;
  &:hover {
    bottom: -30px;
    box-shadow: 3px 3px 2px #000;
  }
  bottom: -20px;
  box-shadow: 2px 2px 2px #000;
  background-color: ${({ theme }) => theme.secondary};
  ${media('>tablet')} {
    width: 150px;
    height: 150px;
    bottom: 0px;
    &:hover {
      bottom: -10px;
    }
  }
`

const HeroBack = styled(Button)`
  place-self: center;
  grid-area: back;
  display: grid;
  place-items: center;
  position: relative;
  left: -35px;
  bottom: 0px;
  &:hover {
    left: -40px;
    box-shadow: 3px 3px 2px #000;

    box-shadow: 2px 2px 1px #000;
  }
`
const HeroNext = styled(Button)`
  grid-area: next;

  display: grid;
  place-items: center;
  position: relative;
  left: 35px;
  &:hover {
    left: 40px;
    box-shadow: 3px 3px 2px #000;
  }
  box-shadow: 2px 2px 1px #000;
`

const Hero = ({ word, handleIncrement = (i) => console.log(i) }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  if (word == null) {
    return null
  } else {
    return (
      <HeroPaper success={-1} href={word.images[0]}>
        {word.recordings.length > 0 ? (
          <Play base64={word.recordings[0]} color='secondary'>
            <RecordVoiceOverIcon />
          </Play>
        ) : null}
        <Content word={word} />
        <More onClick={handleClick} color='primary' round={true}>
          <MoreHorizIcon />
        </More>

        <HeroBack onClick={() => handleIncrement(-1)} round={true}>
          <ChevronLeftIcon />
        </HeroBack>
        <HeroNext round={true} onClick={() => handleIncrement(1)}>
          <ChevronRightIcon />
        </HeroNext>
      </HeroPaper>
    )
  }
}

export default Hero
