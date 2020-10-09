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
import CardPaper from '../../styled/CardPaper'

const TagCard = ({ tag, image, children }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/tags/${tag}`)
  }
  return (
    <CardPaper href={image} onClick={handleClick}>
      {children}
    </CardPaper>
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
