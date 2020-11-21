import { Spinner } from 'Components'
import EditWord from 'Components/EditWord'
import React, { useEffect } from 'react'
import {
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router'
import styled from 'styled-components'
import useAPI from 'utils/hooks/useAPI'

import SideBar from './SideBar'

const EditGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(10vw, auto) 1fr;
  grid-template-rows: 40px auto minmax(50vh, auto);
  grid-template-areas: 'new v' 'filters v' 's v';
  grid-gap: 30px;
`
const DetailGrid = styled.div`
  grid-area: v;
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
      <SideBar setCurrentWord={setCurrentWord} />
      <Switch>
        <Route path={path + '/new'}>
          <DetailGrid>
            <EditWord onSave={onSave} />
          </DetailGrid>
        </Route>
        <Route path={path + '/:_id'}>
          <DetailGrid>
            <EditWord data={currentWord} onSave={onSave} />
          </DetailGrid>
        </Route>
        <Route exact path={path + '/'}>
          <DetailGrid>
            <EditWord onSave={onSave} />
          </DetailGrid>
        </Route>
      </Switch>
    </EditGrid>
  )
}

export default WordDetail
