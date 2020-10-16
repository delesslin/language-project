import React from 'react'

import { Link, useHistory } from 'react-router-dom'
import { RotatedText } from '../../Components/Text'
import { Card } from '../../styled/Card'

const TagCard = ({ tag, image, i = 0 }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/tags/${tag}`)
  }
  return (
    <Card href={image} onClick={handleClick} clickable tag>
      <div></div>
      <RotatedText angle={i % 2 ? -3 : 3}>{tag}</RotatedText>
      <div></div>
    </Card>
  )
}

export default TagCard
