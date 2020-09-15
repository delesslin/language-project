import React from 'react'
import {
  CardMedia,
  Typography,
  CardContent,
  Card,
  Grid,
} from '@material-ui/core'

import { Link } from 'react-router-dom'

const TagCard = ({ tag }) => {
  return (
    <Grid item key={tag}>
      <Link to={`/tags/${tag}`}>
        <Card>
          <CardMedia
            component='img'
            alt='example tag img'
            height='140'
            image='https://loremflickr.com/640/360'
            title={tag}
          />
          <CardContent>
            <Typography variant='h3'>{tag}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

export default TagCard
