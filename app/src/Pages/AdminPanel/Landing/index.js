import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Button, Page, Text } from '../../../Components'
import styled from 'styled-components'
import useAPI from '../../../utils/hooks/useAPI'
import WordDetail from './WordDetail'
const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas: 'header' 'nav' 'content';
  grid-gap: 40px;
`
const AdminNav = styled.div`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
`
const NavButton = styled(Button)`
  width: auto;
  padding: 5px 30px;
  border-radius: 5px;
`
const Content = styled.div`
  grid-area: content;
`
const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
`
const Link = ({ children, to }) => {
  const history = useHistory()
  return (
    <NavButton color='light' onClick={() => history.push(to)}>
      {children}
    </NavButton>
  )
}
const Landing = ({ children }) => {
  const { words, reload, roles } = useAPI()
  const history = useAPI()
  const params = useParams()
  useEffect(() => console.log(params), [params])
  return (
    <Page>
      <LandingDiv>
        <Header>
          <Text size={3}>🔒 </Text>
          <div>
            <Text size={1.3}>{`[ ${words.filter((e) => e.public).length} / ${
              words.length
            } ]`}</Text>
          </div>
        </Header>
        <AdminNav>
          {roles.includes('admin') ? (
            <>
              <Link to='/admin/new'>
                <Text>add new word</Text>
              </Link>
              <Link to='/admin/bulk-new'>
                <Text>bulk upload</Text>
              </Link>
              <Link to='/admin/export'>
                <Text>export</Text>
              </Link>
              {roles.includes('admin') ? (
                <Link to='/admin/users'>
                  <Text>users</Text>
                </Link>
              ) : null}
            </>
          ) : null}
        </AdminNav>
        <Content>{children}</Content>
      </LandingDiv>
    </Page>
  )
}

export default Landing
