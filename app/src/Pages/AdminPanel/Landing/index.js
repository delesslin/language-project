import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { Button, Page, Text } from '../../../Components'
import styled from 'styled-components'
import useAPI from '../../../utils/hooks/useAPI'
import WordDetail from './WordDetail'
const LandingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'nav' 'content';
  grid-gap: 20px;
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
const Link = ({ children, to }) => {
  const history = useHistory()
  return (
    <NavButton color='light' onClick={() => history.push(to)}>
      {children}
    </NavButton>
  )
}
const Landing = () => {
  const { words, reload, roles } = useAPI()
  const history = useAPI()
  const params = useParams()
  useEffect(() => console.log(params), [params])
  return (
    <Page
      title={`editor panel [ ${words.filter((e) => e.public).length} / ${
        words.length
      } ]`}
    >
      <LandingDiv>
        <AdminNav>
          <Link to='/admin/new'>
            <Text>add new word</Text>
          </Link>
          <Link to='/admin/bulk-new'>
            <Text>bulk upload</Text>
          </Link>
          <Link to='/admin/export'>
            <Text>export</Text>
          </Link>
          <Link to='/admin/users'>
            <Text>users</Text>
          </Link>
        </AdminNav>
        <WordDetail />
      </LandingDiv>
    </Page>
  )
  // return (
  //   <LandingDiv>
  //     <Grid item container spacing={2} justify='center'>
  //       <Grid item></Grid>
  //       <Grid item></Grid>
  //       <Grid item></Grid>
  //       <Grid item>
  //         <Button
  //           variant='outlined'
  //           onClick={() => history.push('/admin/users')}
  //         >
  //           users
  //         </Button>
  //       </Grid>
  //     </Grid>
  //     <Page
  //       title={`editor panel [ ${words.filter((e) => e.public).length} / ${
  //         words.length
  //       } ]`}
  //     >
  //       <WordDetail />
  //     </Page>
  //   </LandingDiv>
  // )
}

export default Landing
