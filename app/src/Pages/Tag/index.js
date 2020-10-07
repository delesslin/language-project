import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Grid, Typography } from '@material-ui/core'
import { Words } from '../../context'
import WordCard from './WordCard'

const Tag = () => {
  const { _tagname } = useParams()
  const { tags } = React.useContext(Words.Context)
  const [taggedWords, setTaggedWords] = React.useState([])

  useEffect(() => {
    if (tags.length > 0) {
      const [tagObj] = tags.filter((el) => {
        return el.tag === _tagname
      })

      setTaggedWords(tagObj.words)
    }
  }, [_tagname, tags])
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item container justify='center'>
        <Grid item>
          <Typography variant='h2'>{_tagname}</Typography>
        </Grid>
      </Grid>
      <Grid item container justify='center'>
        {taggedWords.map((entry) => (
          <WordCard key={entry._id} data={entry}></WordCard>
        ))}
      </Grid>
    </Grid>
  )
}

export default Tag
