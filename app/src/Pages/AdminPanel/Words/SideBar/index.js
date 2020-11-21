import React from 'react'
import styled from 'styled-components'

import { useHistory, useParams } from 'react-router'
import {
  Button,
  HiddenIcon,
  ImageIcon,
  MicIcon,
  TagsIcon,
  Text,
  VisibleIcon,
} from 'Components'
import useFilters from '../useFilters'
import Filters from './Filters'
const ScrollGrid = styled.div`
  max-height: 60vh;
  grid-area: s;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`
const ScrollItem = styled.div`
  transition: all 0.2s;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'v e' 'v t';
  padding: 20px;
  margin: 0px 30px 20px 0px;
  border-radius: 6px;
  > p {
    margin: 0px;
    padding: 0px;
  }
  :hover {
    cursor: pointer;
  }
  ${(props) => {
    if (props.selected) {
      return `
        box-shadow: 5px 5px 5px #555;
        border: 1px solid #333;
        :hover {
          box-shadow: 6px 6px #444;
        }
      `
    } else {
      return `
      :hover {
        box-shadow: 2px 2px 2px #bbb;
        border: 1px solid #555;
      }
      `
    }
  }}
`
const ScrollIcons = styled.div`
  grid-area: v;
  display: grid;
  place-items: space-around;
  grid-template-columns: 1fr;
  grid-auto-flow: columns;
  > div {
    display: flex;
    place-items: flex-start;
    align-items: center;
  }
`
const ScrollEntry = styled.div`
  grid-area: e;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  > p {
    background-color: #f9e7b3;
  }
`
const ScrollTranslation = styled.div`
  grid-area: t;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  > p {
    background-color: #b2e1e6;
  }
`
const NewButton = styled(Button)`
  grid-area: new;
  width: 100%;
  height: 100%;
`
const SideBar = ({ setCurrentWord }) => {
  const history = useHistory()
  const params = useParams()
  const { filters, selectFilter, orderedWords } = useFilters()
  const handleRedirect = (i) => {
    history.push(`/admin/${orderedWords[i]._id}`)
  }
  return (
    <>
      <NewButton
        onClick={() => {
          setCurrentWord(null)
          history.push('/admin/new')
        }}
      >
        NEW WORD
      </NewButton>
      <Filters filters={filters} selectFilter={selectFilter} />
      <ScrollGrid>
        {orderedWords.map((word, i) => {
          return (
            <ScrollItem
              onClick={() => handleRedirect(i)}
              key={i}
              selected={params._id === word._id}
            >
              <ScrollIcons>
                <div>
                  <ImageIcon />{' '}
                  <Text size={1}>{`: ${word.images.length}`}</Text>
                </div>
                <div>
                  <MicIcon />{' '}
                  <Text size={1}>{`: ${word.recordings.length}`}</Text>
                </div>
                <div>
                  <TagsIcon /> <Text size={1}>{`: ${word.tags.length}`}</Text>
                </div>
                <div>{word.public ? <VisibleIcon /> : <HiddenIcon />}</div>
              </ScrollIcons>
              <ScrollEntry>
                <p>{word.language_entry}</p>
              </ScrollEntry>
              <ScrollTranslation>
                <p>{word.translations[0]}</p>
              </ScrollTranslation>
            </ScrollItem>
          )
        })}
      </ScrollGrid>
    </>
  )
}

export default SideBar
