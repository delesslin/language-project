import media from 'css-in-js-media'
import React from 'react'
import styled from 'styled-components'
import { BackIcon, FwdIcon, Paper, Player, SoundIcon } from 'Components'
import { RoundButton } from 'Components/Buttons/RoundButton'

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

const Hero = ({
  word,
  handleIncrement = (i) => console.log('no increment fn. i: ', i),
}) => {
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
