import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import {
  Button,
  LockIcon,
  Page,
  Text,
  UsersIcon,
  WordIcon,
} from '../../../Components'
import useAPI from '../../../utils/hooks/useAPI'
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
  justify-content: flex-start;
`
const NavButton = styled(Button)`
  background-color: #ccc;
  margin: 5px;
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
    <NavButton color='#666' round={true} onClick={() => history.push(to)}>
      {children}
    </NavButton>
  )
}
const Landing = ({ children }) => {
  const { words, roles } = useAPI()

  const params = useParams()
  useEffect(() => console.log(params), [params])
  return (
    <Page>
      <LandingDiv>
        <Header>
          <LockIcon size={3} />

          <div>
            <Text size={1.3}>{`[ ${words.filter((e) => e.public).length} / ${
              words.length
            } ]`}</Text>
          </div>
        </Header>
        <AdminNav>
          {roles.includes('admin') ? (
            <>
              <Link to='/admin'>
                <WordIcon />
              </Link>

              <Link to='/admin/users'>
                <UsersIcon />
              </Link>
            </>
          ) : null}
        </AdminNav>
        <Content>{children}</Content>
      </LandingDiv>
    </Page>
  )
}

export default Landing
