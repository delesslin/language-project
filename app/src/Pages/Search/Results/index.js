import { Box, CircularProgress, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Request from './Request'
import Result from './Result'
import { CardGrid } from '../../../styled/Card'
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
    return (
      <Grid container direction='column'>
        <StyledProgress>
          <CircularProgress />
        </StyledProgress>
      </Grid>
    )
  } else if (results !== null) {
    if (results.length > 0) {
      return (
        <CardGrid columns={1}>
          {results.map((entry) => {
            return <Result key={entry.item._id} entry={entry} />
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
