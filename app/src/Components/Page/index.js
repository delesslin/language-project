import React from 'react'
import styled from 'styled-components'
import { Paper, Text } from '../'
import useAPI from '../../utils/hooks/useAPI'
import Spinner from '../Spinner'
const PagePaper = styled(Paper)`
  grid-area: page;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 20px;
  grid-template-areas: 'icon title' 'content content';
`
const Title = styled(Text)`
  grid-area: title;

  display: flex;
  align-items: center;
`
const Content = styled.div`
  grid-area: content;
`
const IconDiv = styled(Text)`
  grid-area: icon;
  display: grid;
  place-items: center;
`
export const Page = ({ children, title = '', Icon = null }) => {
  const { isLoading, words } = useAPI()
  return (
    <PagePaper color='transparent'>
      <IconDiv size={3}>{Icon == null ? null : <Icon />}</IconDiv>
      {title.length > 0 ? <Title size={2}>{title.toUpperCase()}</Title> : null}
      <Content>{isLoading ? <Spinner /> : children}</Content>
    </PagePaper>
  )
}

export default Page
