import { Fab, IconButton } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Player from '../../Components/Player'
import { RotatedText } from '../../Components/Text'
import { Card, CardGrid } from '../../styled/Card'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useAPI from '../../utils/hooks/useAPI'

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 10px;
`
const IconDiv = styled.div`
  display: grid;
  place-items: center;
`
// TODO: refactor HERO to have left and right buttons
// TODO: refactor HERO to be taller
// TODO:
const Hero = ({ word, handleIncrement = (i) => console.log(i) }) => {
  const history = useAPI()
  const handleClick = () => {
    history.push(`/word/${word._id}`)
  }
  if (word == null) {
    return null
  } else {
    return (
      <HeroGrid>
        <IconDiv onClick={() => handleIncrement(-1)}>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </IconDiv>
        <CardGrid columns={1}>
          <Card href={word.images[0]}>
            <div>
              <Player base64={word.recordings[0]} />
            </div>
            <div>
              <RotatedText>
                <b>{word.language_entry}</b>
              </RotatedText>
              <RotatedText>{word.translations[0]}</RotatedText>
            </div>
            <div>
              <Fab onClick={handleClick}>
                <MoreHorizIcon />
              </Fab>
            </div>
          </Card>
        </CardGrid>
        <IconDiv>
          <IconButton onClick={() => handleIncrement(1)}>
            <ChevronRightIcon />
          </IconButton>
        </IconDiv>
      </HeroGrid>
    )
  }
}

export default Hero
