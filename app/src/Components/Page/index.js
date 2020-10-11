import React from 'react'
import { Page as StyledPage, PageContent, PageTitle } from '../../styled/Layout'

const Page = ({ children, title = '' }) => {
  return (
    <StyledPage>
      {title.length > 0 ? <PageTitle>{title.toUpperCase()}</PageTitle> : null}
      <PageContent>{children}</PageContent>
    </StyledPage>
  )
}

export default Page
