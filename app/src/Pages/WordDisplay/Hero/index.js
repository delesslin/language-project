import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import media from 'css-in-js-media'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { RoundButton } from '../../../Components/Buttons/RoundButton'

import {
  BackIcon,
  FwdIcon,
  MoreIcon,
  Paper,
  Player,
  SoundIcon,
} from '../../../Components'

const HeroPaper = styled(Paper)`
  display: grid;
  min-height: 300px;
  grid-template-columns: 100px auto 1fr 100px;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'back content play next' 'extra extra extra extra';
  ${media('>tablet')} {
    grid-template-columns: 100px auto 1fr 100px;
    grid-template-areas: 'back content play next';
  }
`
const PlayerWrapper = styled.div`
  grid-area: play;
  display: grid;
  place-items: center;
`
const PlayerButton = styled(RoundButton)`
  transition: all 0.2s;
  display: grid;
  place-items: center;
  &:hover {

    box-shadow: 3px 3px 2px #000;
  }
  width: 150px;
  height: 150px;
  bottom: 0px;
  &:hover {
    bottom: -10px;
  }
}

  box-shadow: 2px 2px 2px #000;
  ${media('>tablet')} {
`
const MoreWrapper = styled.div`
  grid-area: more;
  display: grid;
  place-items: center;
`
const More = styled(RoundButton)`
  position: relative;
  transition: all 0.2s;
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
  }
`

const HeroBack = styled.div`
  grid-area: back;
  display: grid;
  place-items: center;
  > * {
    position: relative;
    left: -35px;
    bottom: 0px;
    &:hover {
      left: -40px;
      box-shadow: 3px 3px 2px #000;
    }
    box-shadow: 2px 2px 1px #000;
  }
`
const HeroNext = styled.div`
  grid-area: next;

  display: grid;
  place-items: center;
  > * {
    position: relative;
    left: 35px;
    &:hover {
      left: 40px;
      box-shadow: 3px 3px 2px #000;
    }
    box-shadow: 2px 2px 1px #000;
  }
`
const Extra = styled(Paper)`
  grid-area: extra;
  padding: 10px;
  margin: 10px;
`
const Hero = ({ word, handleIncrement = (i) => console.log(i) }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  const handleNext = () => {
    handleIncrement()
  }
  if (word == null) {
    return null
  } else {
    return (
      <HeroPaper success={-1} href={word.images[0]}>
        {word.recordings.length > 0 ? (
          <PlayerWrapper>
            <Player base64={word.recordings[0]}>
              <PlayerButton variant='secondary' size='15vw' lean={0}>
                <SoundIcon />
              </PlayerButton>
            </Player>
          </PlayerWrapper>
        ) : null}

        <HeroBack>
          <RoundButton lean={0} onClick={handleNext}>
            <BackIcon />
          </RoundButton>
        </HeroBack>
        <HeroNext>
          <RoundButton onClick={handleNext}>
            <FwdIcon />
          </RoundButton>
        </HeroNext>
      </HeroPaper>
    )
  }
}

export default Hero
