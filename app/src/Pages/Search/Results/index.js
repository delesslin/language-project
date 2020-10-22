import React from 'react'
import { RiMoreFill } from 'react-icons/ri'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button, Paper, Text, Player, Spinner } from '../../../Components'

import Request from './Request'

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
`
const Word = styled(Paper)`
  grid-area: word;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 60px;
  border-radius: 2px;
  transform: rotate(${() => (Math.random() < 0.5 ? -2 : 2)}deg);
`
const Detail = styled(Paper)`
  grid-area: content;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 2px;
  padding: 15px 40px;
  transform: rotate(${() => (Math.random() < 0.5 ? -2 : 2)}deg);
`
const Play = styled(Player)`
  grid-area: play;
`
const More = styled(Button)`
  grid-area: more;
`
// TODO: insert dividers between results
const Results = ({ loading, results }) => {
  const history = useHistory()
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
              <Word>
                <Text size={2.3}>{entry.language_entry}</Text>
              </Word>
              <Detail>
                <Text size={2}>{entry.translations[0]}</Text>
              </Detail>
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
        {/* <Request /> */}
      </ResultsDiv>
    )
  } else {
    return null
  }
}

export default Results
