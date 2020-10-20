import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Grid, Typography } from '@material-ui/core'
import { Words } from '../../context'
import WordCard from './WordCard'
// import { CardGrid } from '../../styled/Card'
import Page from '../../Components/Page'
import styled from 'styled-components'
import useAPI from '../../utils/hooks/useAPI'
import media from 'css-in-js-media'
const MainText = styled(Typography)`
  background-color: #f8f4dd;
  padding: 5px 10px;
  margin: 30px;
`
const SecondText = styled(Typography)`
  background-color: #a2d2f6;
  padding: 5px 20px;
  margin: 10px;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  ${media('<desktop')} {
    grid-template-columns: 1fr;
  }
`
const Tag = () => {
  const { _tagname } = useParams()
  const { tags } = useAPI()
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
      <CardGrid columns={2}>
        {taggedWords.map((entry, i) => {
          const image = ''

          return (
            <WordCard
              key={i}
              data={entry}
              href={entry.images[0]}
              link={`/word/${entry._id}`}
            />
          )
        })}
      </CardGrid>
    </Page>
  )
}

export default Tag
