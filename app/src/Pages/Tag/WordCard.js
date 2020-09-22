import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// const WordPaper = styled(Paper)({
//   padding: '25px 40px',
// })
const WordPaper = styled(Paper)`
  padding: 25px 40px;
`
const WordCard = ({ data }) => {
  console.log(data)
  return (
    <Grid item>
      <Link to={`/word/${data._id}`} style={{ textDecoration: 'none' }}>
        <WordPaper>
          <Typography variant='h5'>{data.language_entry}</Typography>
          <Typography variant='h6'>{data.translations[0]}</Typography>
        </WordPaper>
      </Link>
    </Grid>
  )
}

export default WordCard
