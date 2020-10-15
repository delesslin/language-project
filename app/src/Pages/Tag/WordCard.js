import { Fab, IconButton, Paper } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Player from '../../Components/Player'
import { RotatedText } from '../../Components/Text'
import { Card } from '../../styled/Card'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const WordCard = ({ data, href, link, children }) => {
  console.log(data)
  const history = useHistory()
  const handleClick = () => {
    history.push(link)
  }
  return (
    <Card href={href}>
      <div>
        {data.recordings.length < 1 ? null : (
          <Player base64={data.recordings[0]} />
        )}
      </div>
      <div>
        <RotatedText>
          <b>{data.language_entry}</b>
        </RotatedText>
        <RotatedText>{data.translations[0]}</RotatedText>
      </div>
      <div>
        <Fab onClick={handleClick}>
          <MoreHorizIcon />
        </Fab>
      </div>
    </Card>
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
