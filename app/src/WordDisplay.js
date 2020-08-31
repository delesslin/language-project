import React from 'react'
import { useParams } from 'react-router'

const WordDisplay = () => {
  const { _id } = useParams()
  return <h1>New word {_id}</h1>
}

export default WordDisplay
