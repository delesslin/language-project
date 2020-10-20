import React from 'react'
import { useHistory } from 'react-router'
import { Paper, Text } from '../../Components/Surfaces'
import styled from 'styled-components'
const TagPaper = styled(Paper)`
  transition: all 0.3s;
  display: grid;
  place-items: center;
  box-shadow: 1px 1px 1px #111;
  > div {
    position: relative;
    transition: all 0.3s;
    box-shadow: 1px 1px 1px #111;
    top: 0px;
  }
  &:hover {
    box-shadow: 2px 2px 2px #111;
    cursor: pointer;
    > div {
      top: -5px;
      box-shadow: 2px 2px 2px #111;
    }
  }
`
const TextDiv = styled.div`
  padding: 10px 30px;
  background-color: ${({ theme }) =>
    Math.random() < 0.5 ? theme.primary : theme.secondary};
  ${() => {
    return Math.random() < 0.5
      ? `transform: rotate(-2deg);`
      : `transform: rotate(2deg);`
  }}
`
const TagCard = ({ tag, image, i = 0 }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push(`/tags/${tag}`)
  }
  return (
    <TagPaper href={image} onClick={handleClick} clickable tag={true}>
      <TextDiv>
        <Text size={1.2}>{tag}</Text>
      </TextDiv>
    </TagPaper>
  )
}

export default TagCard
