import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Grid, Typography } from '@material-ui/core'
import { Words } from '../../context'
import WordCard from './WordCard'
import { CardGrid } from '../../styled/Card'
import Page from '../../Components/Page'

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
    <Page title={_tagname}>
      <CardGrid columns={3}>
        {taggedWords.map((entry, i) => {
          const image = ''

          return (
            <WordCard
              key={i}
              data={entry}
              href={entry.images[0]}
              link={`/word/${entry._id}`}
            >
              <Typography>
                <b>{entry.language_entry}</b>
              </Typography>
              <Typography>{entry.translations[0]}</Typography>
            </WordCard>
          )
        })}
      </CardGrid>
    </Page>
  )
  // return (
  //   <Grid container direction='column' spacing={3}>
  //     <Grid item container justify='center'>
  //       <Grid item>
  //         <Typography variant='h2'>{_tagname}</Typography>
  //       </Grid>
  //     </Grid>
  //     <Grid item>
  //     </Grid>
  //   </Grid>
  // )
}

export default Tag
