import { Box, CircularProgress, Grid, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const StyledProgress = styled(Box)`
  display: grid;
  place-items: center;
  padding-top: 75px;
`
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
        <Grid container direction='column'>
          {results.map((entry) => {
            const data = entry.item
            return (
              <Grid item container justify='space-around' key={entry.refIndex}>
                <Grid item>
                  <Typography>{data.language_entry}</Typography>
                  <Typography>{data.translations[0]}</Typography>
                </Grid>
              </Grid>
            )
          })}
          <Grid item>
            Can't find what you're looking for? Request a translation here: LINK
          </Grid>
        </Grid>
      )
    }
  } else {
    return null
  }
}

export default Results
