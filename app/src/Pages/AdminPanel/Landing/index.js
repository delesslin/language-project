import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import {
  Button,
  LockIcon,
  Page,
  Text,
  UnlockIcon,
  UsersIcon,
  WordIcon,
} from '../../../Components'
import useAPI from '../../../utils/hooks/useAPI'
const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header' 'content';
  grid-gap: 40px;
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
  justify-content: flex-start;
d`
const AdminButton = styled(Button)`
  background-color: transparent;
  box-shadow: none;
  &:hover {
    box-shadow: 1px 1px 1px #ccc;
  }
`
const Link = ({ children, to }) => {
  const history = useHistory()
  return (
    <NavButton
      color='#666'
      round={true}
      size={5}
      onClick={() => history.push(to)}
    >
      {children}
    </NavButton>
  )
}
const Landing = ({ children }) => {
  const { words, roles } = useAPI()

  return (
    <Page>
      <LandingDiv>
        <Header>
          <AdminButton round={true}>
            {roles.includes('editor') ? (
              <UnlockIcon size={3} />
            ) : (
              <LockIcon size={3} />
            )}
          </AdminButton>
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

          {/* <div>
            <Text size={1.3}>{`[ ${words.filter((e) => e.public).length} / ${
              words.length
            } ]`}</Text>
          </div> */}
        </Header>
        <Content>{children}</Content>
      </LandingDiv>
    </Page>
  )
}

export default Landing
