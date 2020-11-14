import React, { useState } from 'react'
import { RiMoreFill } from 'react-icons/ri'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import {
  Button,
  Paper,
  Text,
  Player,
  Spinner,
  Chip,
  Notification,
} from 'Components'
import media from 'css-in-js-media'
import Request from 'Components/Request'
import useCopy from 'utils/hooks/useCopy'
// import Request from './Request'

const ResultsDiv = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 15px;
`
const Result = styled(Paper)`
  display: grid;
  place-items: center;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'play word more' 'play content more';
  min-height: 250px;
  padding: 20px;
  ${media('<tablet')} {
    grid-template-areas: 'play word .' 'more content .';
  }
`
const Word = styled(Chip)`
  grid-area: word;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 60px;
  border-radius: 2px;
  transform: rotate(${() => (Math.random() < 0.5 ? -2 : 2)}deg);
`
const Details = styled.div`
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Detail = styled(Chip)`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  padding: 15px 40px;
  transform: rotate(${() => (Math.random() < 0.5 ? -2 : 2)}deg);
  margin: 3px;
  display flex;
  justify-content: center;
  > * {
    text-align: center;
  }
`
const Play = styled(Player)`
  grid-area: play;
`
const More = styled(Button)`
  grid-area: more;
`
// TODO: insert dividers between results
const Results = ({ loading, results }) => {
  const [open, setOpen] = useState(false)
  const copy = useCopy()
  const history = useHistory()
  const handleCopy = (entry) => {
    copy(entry)
    setOpen(true)
  }
  if (loading) {
    return <Spinner />
  } else if (results !== null) {
    return (
      <ResultsDiv>
        {results.map(({ item }, i) => {
          const entry = item
          return (
            <Result href={entry.length === 0 ? '' : entry.images[0]} key={i}>
              {entry.recordings.length > 0 ? (
                <Play base64={entry.recordings[0]}>~~~</Play>
              ) : null}
              <Word onClick={() => handleCopy(entry.language_entry)}>
                <Text size={2.3}>{entry.language_entry}</Text>
              </Word>
              <Notification open={open} handleClose={() => setOpen(false)}>
                {entry.language_entry} copied to clipboard!
              </Notification>
              <Details>
                {entry.translations.map((entry, i) => {
                  return (
                    <Detail key={i}>
                      <Text size={2}>{entry}</Text>
                    </Detail>
                  )
                })}
              </Details>

              <More
                round={true}
                onClick={() => history.push(`/word/${entry._id}`)}
              >
                <Text size={1.5}>
                  <RiMoreFill />
                </Text>
              </More>
            </Result>
          )
        })}
        <Request />
      </ResultsDiv>
    )
  } else {
    return null
  }
}

export default Results
