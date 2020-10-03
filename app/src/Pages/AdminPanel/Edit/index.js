import React from 'react'
import { useRouteMatch } from 'react-router-dom'
const Edit = () => {
  const { params } = useRouteMatch()
  const { _id } = params
  return (
    <>
      <h1>Let's edit entry with id #{_id}</h1>
    </>
  )
}

export default Edit
