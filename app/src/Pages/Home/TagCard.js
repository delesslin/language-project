import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { Card } from '../../styled/Card'

const TagCard = ({ tag, image, children }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/tags/${tag}`)
  }
  return (
    <Card href={image} onClick={handleClick}>
      {children}
    </Card>
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
