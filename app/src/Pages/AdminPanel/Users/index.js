/* eslint-disable */
import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Page from '../../../Components/Page'
import useAPI from '../../../utils/hooks/useAPI'
import Detail from './Detail'
const UsersGrid = styled.div`
transition: all 0.2s;
display: grid;
  grid-template-columns: minmax(200px, auto) 1fr;
  grid template-rows: minmax(500px, auto) auto;
  grid-template-areas: "menu detail" "new new";
  grid-gap: 35px;
`
const MenuGrid = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;

  p {
    text-align: right;
    margin: 0px;
    padding: 5px 10px;
  }
`
const NewGrid = styled.div`
  grid-area: new;
`
const FirstP = styled.p`
  background-color: #f7f06d;
`
const SecondP = styled.p`
  background-color: #b5f8fe;
`
const HoverGrid = styled(Grid)`
  p {
    transition: all 0.3s;
  }
  :hover {
    p {
      box-shadow: 2px 2px #555;
      cursor: pointer;
    }
  }
`
// TODO: handle submit
// TODO: handle delete
// TODO: handle nvm
// TODO: refactor to use url params
const Users = () => {
  const [users, setUsers] = useState([])

  const [unauthorized, setUnauthorized] = useState(true)
  const history = useHistory()

  const { getUsers } = useAPI()
  const fetchUsers = () => {
    getUsers()
      .then((res) => {
        setUsers(res.data)
        setUnauthorized(false)
      })
      .catch((e) => {
        console.log(e.response)
      })
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const handleClick = (_id) => {
    history.push(`/admin/users/${_id}`)
  }
  const handleNew = () => {
    history.push('/admin/signup')
  }
  if (unauthorized) {
    return (
      <Page title={`⚠ you can't access users ⚠`}>
        <h2>Only administrators can view, edit, add, and delete users</h2>
      </Page>
    )
  } else {
    return (
      <Page title='manage users'>
        <UsersGrid>
          <MenuGrid>
            <Grid container direction='column' spacing={4}>
              {users.map((user, i) => {
                return (
                  <HoverGrid
                    item
                    key={i}
                    onClick={() => handleClick(user._id)}
                    container
                    direction='column'
                    alignItems='flex-end'
                    justify='flex-start'
                    spacing={0}
                  >
                    <Grid item>
                      <FirstP>{user.email}</FirstP>
                    </Grid>
                    <Grid>
                      <SecondP>{user.username}</SecondP>
                    </Grid>
                  </HoverGrid>
                )
              })}
            </Grid>
          </MenuGrid>
          <Detail users={users} refresh={getUsers} />
          <NewGrid>
            <Button
              variant='contained'
              color='primary'
              onClick={handleNew}
              fullWidth
            >
              add new user
            </Button>
          </NewGrid>
        </UsersGrid>
      </Page>
    )
  }
}

export default Users
