import React from 'react'
import styled from 'styled-components'
import media from 'css-in-js-media'
import { Button, Chip, Paper, Text } from '../../Components'
import ReplayIcon from '@material-ui/icons/Replay'
const FinishPaper = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'play prompt next' 'options options options';
  margin-top: 25px;
  place-items: center;
  grid-gap: 25px;
  min-height: 50vh;
  background-color: ${({ theme }) => theme.green};
`
const Title = styled(Chip)`
  grid-area: prompt;
  padding: 10px 30px;
  border-radius: 2px;
  transform: rotate(2deg);
`
const PlayAgain = styled(Button)`
  grid-area: options;
`

const Finished = ({ reset }) => {
  return (
    <FinishPaper>
      <Title>
        <Text size={4}>
          <i>Kuricure!</i>
        </Text>
      </Title>
      <PlayAgain round={true} onClick={reset}>
        <ReplayIcon />
      </PlayAgain>
    </FinishPaper>
  )
}

export default Finished
