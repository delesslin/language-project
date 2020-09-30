import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StyledLink from '../../../Components/styled/StyledLink'

const CircleImg = styled.img`
  border-radius: 50%;
  height: 100px;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-right: 15px;
`
const ResultDiv = styled(Grid)`
  padding: 10px 0px;
`

const WordTypo = styled(Typography)`
  font-weight: bold;
`
const PronTypo = styled(Typography)`
  font-style: italic;
`

const Result = ({ entry }) => {
  const data = entry.item

  return (
    <StyledLink to={`/word/${data._id}`}>
      <ResultDiv>
        <CircleImg src='https://picsum.photos/200' alt='example image' />
        <WordTypo variant='h5'>{data.language_entry}</WordTypo>
        <PronTypo>{data.pronunciation[0]}</PronTypo>
        <Typography>{data.translations[0]}</Typography>
      </ResultDiv>
    </StyledLink>
  )
}

export default Result
