import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import CardPaper from '../../styled/CardPaper'
import styled from 'styled-components'
// const WordPaper = styled(Paper)({
//   padding: '25px 40px',
// })
const WordPaper = styled(Paper)`
  padding: 15px 20px;
`
const WordCard = ({ data, href, link, children }) => {
  console.log(data)
  const history = useHistory()
  const handleClick = () => {
    history.push(link)
  }
  return (
    <CardPaper href={href} onClick={handleClick}>
      <WordPaper>{children}</WordPaper>
    </CardPaper>
  )
  // return (
  //   <Grid item>
  //     <Link to={`/word/${data._id}`} style={{ textDecoration: 'none' }}>
  //       <WordPaper>
  //         <Typography variant='h5'>{data.language_entry}</Typography>
  //         <Typography variant='h6'>{data.translations[0]}</Typography>
  //       </WordPaper>
  //     </Link>
  //   </Grid>
  // )
}

export default WordCard
