import React from 'react'
import {
  CardMedia,
  Typography,
  CardContent,
  Card,
  Grid,
  Paper,
  Button,
} from '@material-ui/core'

import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
const TagPaper = styled(Paper)`
  background-image: url(${({ href }) => href});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
  &:hover {
    box-shadow: 5px 5px 5px #555;
    cursor: pointer;
    button {
      box-shadow: 2px 2px 2px #555;
    }
  }
`

const TagCard = ({ tag, image }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/tags/${tag}`)
  }
  return (
    <TagPaper href={image} onClick={handleClick}>
      <Button variant='contained'>{tag}</Button>
    </TagPaper>
  )
  // return (
  //   <Grid item key={tag}>
  //     <Link to={`/tags/${tag}`} style={{ textDecoration: 'none' }}>
  //       <Card>
  //         <CardMedia
  //           component='img'
  //           alt='example tag img'
  //           height='140'
  //           image='https://loremflickr.com/640/360'
  //           title={tag}
  //         />
  //         <CardContent>
  //           <Typography variant='h3'>{tag}</Typography>
  //         </CardContent>
  //       </Card>
  //     </Link>
  //   </Grid>
  // )
}

export default TagCard
