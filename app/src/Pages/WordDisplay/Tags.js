import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Paper, Text } from '../../Components'
const TagsDiv = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 10px;
`

const Tag = styled(Paper)`
  transition: all 0.2s;
  min-height: 15vh;
  border-radius: 7px;
  display: grid;
  place-items: center;
  box-shadow: 1px 1px 1px #111;
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.green};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.secondary};
  }
  &:hover {
    box-shadow: 2px 2px 1px #111;
    cursor: pointer;
    > p {
      box-shadow: 2px 2px 1px #111;
    }
  }
`

const TagText = styled(Text)`
  padding: 5px 20px;
  transition: all 0.3s;
  box-shadow: 1px 1px 1px #111;
  background-color: ${({ theme }) =>
    Math.random() <= 5 ? theme.primary : theme.secondary};
`
const SectionText = styled(Text)`
  text-align: right;
`
const Tags = ({ tags }) => {
  const history = useHistory()
  const handleClick = (tag) => {
    history.push(`/tags/${tag}`)
  }
  return (
    <TagsDiv>
      <SectionText size={2}>
        <i>Related Topics</i>
      </SectionText>
      {tags.map((tag, i) => {
        return (
          <Tag key={i} onClick={(e) => handleClick(tag.trim())}>
            <TagText size={1.4}>{tag.toUpperCase()}</TagText>
          </Tag>
        )
      })}
    </TagsDiv>
  )
}

export default Tags
