import { Box, CircularProgress, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Request from './Request'
import Result from '../../../Components/WordCard'
import { CardGrid } from '../../../styled/Card'
import Spinner from '../../../Components/Spinner'
import WordCard from '../../../Components/WordCard'
const StyledProgress = styled(Box)`
  display: grid;
  place-items: center;
  padding-top: 75px;
`
const SearchGrid = styled.div`
  display: grid;
  grid-column-template: 70%;
  auto-row: 200px;
`
// TODO: insert dividers between results
const Results = ({ loading, results }) => {
  if (loading) {
    return <Spinner />
  } else if (results !== null) {
    if (results.length > 0) {
      return (
        <CardGrid columns={1}>
          {results.map(({ item }) => {
            const entry = item
            return <WordCard key={entry._id} word={entry} />
          })}
          <Request />
        </CardGrid>
      )
    } else {
      return (
        <Grid container direction='column'>
          <Request />
        </Grid>
      )
    }
  } else {
    return null
  }
}

export default Results
