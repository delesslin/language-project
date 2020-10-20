import React from 'react'
import { Page as StyledPage, PageContent, PageTitle } from '../../styled/Layout'
import useAPI from '../../utils/hooks/useAPI'
import Spinner from '../Spinner'
import { Paper, Text } from '../'
import styled from 'styled-components'
const PagePaper = styled(Paper)`
  grid-area: page;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  grid-template-areas: 'title' 'content';
`
const Title = styled(Text)`
  grid-area: title;
  padding: 20px 0px 40px 0px;
`
const Content = styled.div`
  grid-area: content;
`
const Page = ({ children, title = '' }) => {
  const { isLoading, words } = useAPI()
  if (isLoading) {
    return (
      <Paper color='transparent'>
        <Spinner />
      </Paper>
    )
  }
  return (
    <PagePaper color='transparent'>
      {title.length > 0 ? <Title size={2}>{title.toUpperCase()}</Title> : null}
      <Content>{children}</Content>
    </PagePaper>
  )
}

export default Page
