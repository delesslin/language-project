import React from 'react'
import { Grid, Chip } from '@material-ui/core'
import StyledLink from '../../styled/StyledLink'
const Tags = ({ data }) => {
  return (
    <Grid container spacing={1}>
      {data.map((tag, i) => {
        return (
          <Grid item key={i}>
            <StyledLink to={`/tags/${tag}`}>
              <Chip label={tag} clickable />
            </StyledLink>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Tags
