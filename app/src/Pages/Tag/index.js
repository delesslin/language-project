import media from 'css-in-js-media'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import Hero from '../../Components/Hero'
// import { CardGrid } from '../../styled/Card'
import Page from '../../Components/Page'
import useAPI from '../../utils/hooks/useAPI'
import WordCard from './WordCard'

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
