import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import EditWord from '../../../Components/EditWord'
import Loading from '../../../Components/Loading'
import { Auth, Words } from '../../../context'
import useAPI from '../../../utils/hooks/useAPI'
const EditGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(10vw, auto) 1fr;
  grid-template-rows: minmax(50vh, auto);
  grid-template-areas: 's v';
  grid-gap: 30px;
`
const DetailGrid = styled.div`
  grid-area: v;
`
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
const ScrollIcon = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
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
const WordDetail = () => {
  const { words, refetchWords, isLoading, headers } = useAPI()
  const params = useParams()
  const [currentWord, setCurrentWord] = React.useState(null)
  const history = useHistory()

  const { Words: WordsAPI } = useAPI()
  useEffect(() => {
    if (params._id != null) {
      setCurrentWord(() => {
        return words.find((entry) => entry._id === params._id)
      })
    }
  }, [words, params])
  const handleRedirect = (i) => {
    console.log('change word', words[i]._id)
    history.push(`/admin/${words[i]._id}`)
  }
  const onSave = (obj) => {
    WordsAPI.update(params._id, obj)
      .then((e) => {
        refetchWords()
        setCurrentWord(null)
        history.push(`/admin`)
      })
      .catch(console.error)
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <EditGrid>
      <ScrollGrid>
        {words == null
          ? null
          : words
              .sort((a, b) => {
                // put non-public items first
                return a.public > b.public
              })
              .map((word, i) => {
                return (
                  <ScrollItem
                    onClick={() => handleRedirect(i)}
                    key={i}
                    selected={params._id == word._id}
                  >
                    <ScrollIcon>
                      {word.public ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </ScrollIcon>
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
      <DetailGrid>
        {currentWord == null ? (
          <h4>Please select a word</h4>
        ) : (
          <EditWord data={currentWord} onSave={onSave} />
        )}
      </DetailGrid>
    </EditGrid>
  )
}

export default WordDetail
