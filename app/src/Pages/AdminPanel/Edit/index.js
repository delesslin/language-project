import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import EditWord from '../../../Components/EditWord'
import Loading from '../../../Components/Loading'
import { Words } from '../../../context'

const Edit = () => {
  const { words } = useContext(Words.Context)
  const {
    params: { _id },
  } = useRouteMatch()
  const [initialState, setInitialState] = React.useState(null)
  useEffect(() => {
    setInitialState(words.find((entry) => entry._id === _id))
  }, [words])
  if (initialState === null) {
    return <Loading />
  } else {
    return (
      <>
        <h1>Let edit entry with id #{_id}</h1>
        <EditWord data={initialState} />
      </>
    )
  }
}

export default Edit
