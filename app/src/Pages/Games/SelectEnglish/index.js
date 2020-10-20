import { Button, Chip } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Player from '../../../Components/Player'
import { RotatedDiv, RotatedText } from '../../../Components/Text'
import { Card, CardGrid } from '../../../styled/Card'
import IconButton from '../../../Components/Buttons/IconButton'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import media from 'css-in-js-media'
import Options from '../Options'
import { RoundButton as NextButton } from '../../../Components/Buttons/RoundButton'
import { Paper } from '../../../Components/Surfaces'
const GameGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 25px;
  margin-top: 25px;
`

const OutcomeDiv = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;
  font-weight: bold;
  grid-gap: 10px
  border-radius: 10px;
  padding: 7px;
  > p {
    text-align: center;
  }
`
const moveVertical = (lean) => keyframes`
0%: { right: 0px;}
100% { right: ${lean !== 0 ? lean * -1 : '0px'};}


`

const LanguageDiv = styled(RotatedDiv)`
  font-size: 1.5rem;
  font-weight: bold;
  // padding: 5px 50px;
`
const TranslationDiv = styled(RotatedDiv)`
  font-size: 1.2em;
  // padding: 3px 40px;
`
// TODO: move this logic to ./Games
// TODO: a game componenet should only receive lesson and incrementProgress
const SelectEnglish = ({ options, onAnswer, status, next }) => {
  const [answer, setAnswer] = React.useState(null)
  useEffect(() => {
    const randomArr = options.sort(() => Math.random() >= 0.5)
    setAnswer(randomArr[0])
  }, [options])

  const handleAnswer = (id) => {
    if (id === answer._id) {
      onAnswer(20)
    } else {
      onAnswer(-10)
    }
  }
  if (answer == null) {
    return null
  }

  if (status > -1) {
    return (
      <GameGrid>
        <CardGrid columns={1}>
          <Paper success={status}>
            {answer.recordings.length > 0 ? (
              <NextButton variant='secondary' size='10vw' lean={-5}>
                <Player base64={answer.recordings[0]}>
                  <RecordVoiceOverIcon />
                  {/* <Player base64={answer.recordings[0]} /> */}
                </Player>
              </NextButton>
            ) : null}
            <div>
              <LanguageDiv>
                <p>{answer.language_entry}</p>
              </LanguageDiv>
              <TranslationDiv>{answer.translations[0]}</TranslationDiv>
            </div>
            <NextButton size='15vw' onClick={next} color='primary'>
              <div>👍</div> <NavigateNextIcon />
            </NextButton>
          </Paper>
        </CardGrid>
      </GameGrid>
    )
  }
  return (
    <GameGrid>
      <CardGrid columns={1}>
        <Paper color='light'>
          {answer.recordings.length > 0 ? (
            <NextButton variant='secondary' size='10vw' lean={-5}>
              <Player base64={answer.recordings[0]}>
                <RecordVoiceOverIcon />
                {/* <Player base64={answer.recordings[0]} /> */}
              </Player>
            </NextButton>
          ) : null}
          <LanguageDiv>{answer.language_entry}</LanguageDiv>
        </Paper>
      </CardGrid>
      <Options options={options} handleAnswer={handleAnswer} />
    </GameGrid>
  )
}

export default SelectEnglish
