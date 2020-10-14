import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'
import { EditTable } from '../../../Components/WordTable'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import EditWord from '../../../Components/EditWord'
import { Auth, Words } from '../../../context'
import Axios from 'axios'
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
  overflow: scroll;
  display: flex;
  flex-direction: column;
`
const ScrollItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'v e' 'v t';
  padding: 20px;
  margin-bottom: 20px;
  grid-gap: 10px;
`
const ScrollIcon = styled.div`
  grid-area: v;
  display: grid;
  place-items: center;
`
const ScrollEntry = styled.div`
  grid-area: e;
  text-align: right;
`
const ScrollTranslation = styled.div`
  grid-area: t;
  text-align: right;
`
const WordDetail = () => {
  const { words, refetchWords } = React.useContext(Words.Context)
  const params = useParams()
  const [currentWord, setCurrentWord] = React.useState(null)
  const history = useHistory()
  const { headers } = useContext(Auth.Context)
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
    Axios.patch(`/api/words/${obj._id}`, obj, headers)
      .then((e) => {
        refetchWords()
        setCurrentWord(null)
        history.push(`/admin`)
      })
      .catch(console.error)
  }
  return (
    <EditGrid>
      <ScrollGrid>
        {words == null
          ? null
          : words.map((word, i) => {
              return (
                <ScrollItem onClick={() => handleRedirect(i)} key={i}>
                  <ScrollIcon>
                    {word.public ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </ScrollIcon>
                  <ScrollEntry>{word.language_entry}</ScrollEntry>
                  <ScrollTranslation>{word.translations[0]}</ScrollTranslation>
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
