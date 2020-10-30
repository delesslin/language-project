import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import React, { useEffect } from 'react'
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router'
import styled from 'styled-components'
import { Button, Spinner } from '../../../Components'
import EditWord from '../../../Components/EditWord'
import useAPI from '../../../utils/hooks/useAPI'
import { NewWord } from './NewWord'

const EditGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(10vw, auto) 1fr;
  grid-template-rows: 40px minmax(50vh, auto);
  grid-template-areas: 'new v' 's v';
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
const NewButton = styled(Button)`
  grid-area: new;
  width: 100%;
  height: 100%;
`
const WordDetail = () => {
  const { words, isLoading, updateWord, createWord } = useAPI()
  const params = useParams()
  const { path } = useRouteMatch()
  const [currentWord, setCurrentWord] = React.useState(null)
  const history = useHistory()

  useEffect(() => {
    if (params._id != null) {
      setCurrentWord(() => {
        return words.find((entry) => entry._id === params._id)
      })
    } else {
      setCurrentWord(null)
    }
  }, [words, params])
  const handleRedirect = (i) => {
    history.push(`/admin/${words[i]._id}`)
  }
  const onSave = (obj) => {
    if (currentWord == null) {
      createWord(obj)
        .then((res) => {
          history.push(`/admin/${obj._id}`)
        })
        .catch((e) => {
          console.error(e)
        })
    } else {
      updateWord(params._id, obj)
        .then((e) => {
          setCurrentWord(null)
          history.push(`/admin/${params._id}`)
        })
        .catch(console.error)
    }
  }
  if (isLoading) {
    return <Spinner />
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
                    selected={params._id === word._id}
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
      <Switch>
        <Route path={path + '/new'}>
          <DetailGrid>
            <NewWord />
          </DetailGrid>
        </Route>
        <Route path={path + '/:_id'}>
          <DetailGrid>
            <EditWord data={currentWord} onSave={onSave} />
          </DetailGrid>
        </Route>
        <Route exact path={path + '/'}>
          <DetailGrid>
            <NewWord />
          </DetailGrid>
        </Route>
      </Switch>
      <NewButton
        onClick={() => {
          setCurrentWord(null)
          history.push('/admin/new')
        }}
      >
        NEW WORD
      </NewButton>
    </EditGrid>
  )
}

export default WordDetail
