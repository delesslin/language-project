import { Button, Chip } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Player from '../../../Components/Player'
import { RotatedText } from '../../../Components/Text'
import { Card, CardGrid } from '../../../styled/Card'

const GameGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 25px;
  margin-top: 25px;
`
const OptionsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    margin: 10px 20px;
  }
`
const OutcomeDiv = styled.div`
  background-color: ${({ correct }) => (correct ? '#eaf9c8' : '#ffc2c8')};
  display: grid;
  grid-template-rows: auto auto auto;
  place-items: stretch;
  font-weight: bold;
  grid-gap: 10px
  border-radius: 10px;
  padding: 7px;
  h3 {
    text-align: center;
  }
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
        <OutcomeDiv correct={status}>
          <CardGrid columns={1}>
            <Card>
              {answer.recordings.length > 0 ? (
                <Player base64={answer.recordings[0]} />
              ) : null}
              <div>
                <RotatedText>
                  <b>{answer.language_entry}</b>
                </RotatedText>
                <RotatedText>{answer.translations[0]}</RotatedText>
              </div>
            </Card>
          </CardGrid>
          <h3>{status ? 'Correct!' : 'Incorrect 🙁'}</h3>
          <Button variant='contained' onClick={next}>
            NEXT
          </Button>
        </OutcomeDiv>
      </GameGrid>
    )
  }
  return (
    <GameGrid>
      <CardGrid columns={1}>
        <Card>
          {answer.recordings.length > 0 ? (
            <Player base64={answer.recordings[0]} />
          ) : null}
          <RotatedText>{answer.language_entry}</RotatedText>
        </Card>
      </CardGrid>
      <OptionsGrid>
        {options.map((entry, i) => {
          return (
            <div key={i}>
              <Chip
                label={entry.translations[0]}
                onClick={() => handleAnswer(entry._id)}
              />
            </div>
          )
        })}
      </OptionsGrid>
    </GameGrid>
  )
}

export default SelectEnglish
