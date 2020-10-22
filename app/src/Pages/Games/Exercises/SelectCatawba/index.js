import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import media from 'css-in-js-media'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, Paper, Player, Text } from '../../../../Components'
import useAPI from '../../../../utils/hooks/useAPI'
import Options from './Options'

const GameGrid = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'play prompt next' 'options options options';
  ${media('<tablet')} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: 'play next' 'prompt prompt' 'options options';
  }
  margin-top: 25px;
  place-items: center;
  grid-gap: 25px;
  min-height: 50vh;
`

const Language = styled(Paper)`
  grid-area: prompt;
  font-size: 1.5rem;

  padding: 10px 50px;
  transform: rotate(-2deg);
  border-radius: 2px;
`

const NextButton = styled(Button)`
  grid-area: next;
`
const Play = styled(Player)`
  grid-area: play;
  padding: 30px;
  background-color: ${({ theme }) => theme.green};
`
// TODO: move this logic to ./Games
// TODO: a game componenet should only receive lesson and incrementProgress
const SelectCatawba = ({ options, onAnswer, status, next }) => {
  const [answer, setAnswer] = React.useState(null)
  const [choice, setChoice] = React.useState('')
  const { isLoading } = useAPI()
  useEffect(() => {
    setAnswer(() => options[Math.floor(Math.random() * options.length)])
  }, [options])

  const handleAnswer = (id) => {
    if (id === answer._id) {
      onAnswer(15)
    } else {
      onAnswer(-10)
    }
    setChoice(id)
  }
  const handleNext = () => {
    setAnswer(null)
    setChoice('')
    next()
  }
  if (answer == null || isLoading) {
    return null
  }
  return (
    <GameGrid href={answer.images.length > 0 ? answer.images[0] : ''}>
      {answer.recordings.length > 0 ? (
        <Play base64={answer.recordings[0]} color='green'></Play>
      ) : null}
      <Language color='green'>
        <Text size={3}>{answer.translations[0]}</Text>
      </Language>

      <Options
        options={options}
        handleAnswer={handleAnswer}
        choice={choice}
        answer={answer._id}
      />
      {status < 0 ? null : (
        <NextButton onClick={handleNext} round={true} color='secondary'>
          <div>👍</div> <NavigateNextIcon />
        </NextButton>
      )}
    </GameGrid>
  )
}

export default SelectCatawba
