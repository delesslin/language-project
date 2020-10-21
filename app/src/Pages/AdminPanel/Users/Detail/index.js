import { Checkbox, Grid, TextField, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import Buttons from '../../../../Components/Buttons/AdminEditButtons'
import { Auth } from '../../../../context'
import useAPI from '../../../../utils/hooks/useAPI'

const DetailGrid = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
`
// TODO: implement textfields
// TODO: implement save and nevermind buttons both should be disabled until a change is made
const Detail = ({
  users = [],

  refresh = () => console.log('refresh!'),
}) => {
  const [locked, setLocked] = useState(true)

  const { _id } = useParams()
  const history = useAPI()
  const [user, setUser] = useState(null)
  const { Users } = useAPI()

  const lock = (bool) => setLocked(bool)
  useEffect(() => {
    if (_id != null && users.length > 0) {
      setLocked(locked)
      const obj = users.find((user) => user._id === _id)
      if (obj == null) {
        history.push('/admin/users')
      } else {
        setUser(() => {
          return { ...obj }
        })
      }
    } else {
      setUser(null)
    }
  }, [_id, users])

  const handleRoleChange = (e, role) => {
    const checked = e.target.checked
    console.log('role change')
    setUser((user) => {
      if (user.roles.includes(role)) {
        console.log('delete?')
        return {
          ...user,
          roles: user.roles.filter((r) => r != role),
        }
      } else {
        console.log('add??')
        return {
          ...user,
          roles: [...user.roles, role],
        }
      }
    })
  }
  const onSubmit = () => {
    Users.update(user)
      .then(() => {
        refresh()
        console.log('success!')
        setLocked(true)
      })
      .catch(console.error)
  }
  const onDelete = () => {
    Users.delete(_id)
      .then(() => {
        setUser(null)
        history.push('/admin/users')
        refresh()
      })
      .catch(console.error)
  }
  return (
    <>
      {user == null ? (
        <DetailGrid>
          <h3>No USER selected</h3>
        </DetailGrid>
      ) : (
        <DetailGrid>
          <TextField
            label='username'
            variant='filled'
            disabled={locked}
            value={user.username}
            onChange={(e) => {
              const { value } = e.target
              setUser(() => {
                console.log(e)
                return { ...user, username: value }
              })
            }}
          />
          <TextField
            label='email'
            variant='filled'
            disabled={locked}
            value={user.email}
            onChange={(e) => {
              const { value } = e.target
              setUser((user) => {
                if (user != null) return { ...user, email: value }
              })
            }}
          />
          <Grid container spacing={2}>
            {['user', 'editor', 'admin', 'owner'].map((role, i) => {
              return (
                <Grid item key={i}>
                  <Grid container item direction='column' justify='center'>
                    <Grid item>
                      <Typography>{role.toUpperCase()}</Typography>
                    </Grid>
                    <Checkbox
                      checked={
                        user.roles != null ? user.roles.includes(role) : false
                      }
                      label={role}
                      disabled={locked}
                      onChange={(e) => handleRoleChange(e, role)}
                    />
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
          <Grid item container spacing={3} alignItems='center'>
            <Grid item>
              <Buttons
                locked={locked}
                lock={lock}
                handleSubmit={onSubmit}
                handleDelete={onDelete}
              />
            </Grid>
          </Grid>
        </DetailGrid>
      )}
    </>
  )
}

export default Detail