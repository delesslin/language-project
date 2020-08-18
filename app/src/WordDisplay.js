import React, { useEffect } from 'react'

const WordDisplay = (props) => {
  const _id = props.match.params._id
  return <h1>New word {_id}</h1>
}

export default WordDisplay
