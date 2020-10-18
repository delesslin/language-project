import React from 'react'
import { Page as StyledPage, PageContent, PageTitle } from '../../styled/Layout'
import useAPI from '../../utils/hooks/useAPI'
import Spinner from '../Spinner'

const Page = ({ children, title = '' }) => {
  const { isLoading, words } = useAPI()
  if (words.length === 0) {
    return (
      <StyledPage>
        <Spinner />
      </StyledPage>
    )
  }
  return (
    <StyledPage>
      {title.length > 0 ? <PageTitle>{title.toUpperCase()}</PageTitle> : null}
      <PageContent>{children}</PageContent>
    </StyledPage>
  )
}

export default Page
