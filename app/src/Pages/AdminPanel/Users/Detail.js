import {
  Button,
  Checkbox,
  Fab,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'

const DetailGrid = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;
`
// TODO: implement textfields
// TODO: implement save and nevermind buttons both should be disabled until a change is made
const Detail = ({ user }) => {
  const [locked, setLocked] = useState(true)
  const [roles, setRoles] = useState({
    admin: false,
    editor: false,
    user: false,
  })
  const lock = () => setLocked(true)
  const unlock = () => setLocked(false)
  useEffect(() => {
    if (user !== null) {
      setRoles((roles) => {
        return Object.keys(roles).reduce((acc, curr) => {
          if (user.roles.includes(curr)) {
            return {
              ...acc,
              [curr]: true,
            }
          } else {
            return {
              ...acc,
              [curr]: false,
            }
          }
        }, {})
      })
    }
    setLocked(true)
  }, [user])

  const handleRoleChange = (e, role) => {
    const checked = e.target.checked
    setRoles((roles) => {
      return {
        ...roles,
        [role]: checked,
      }
    })
  }
  return (
    <>
      {user == null ? (
        <DetailGrid>
          <h3>Please select a user</h3>
        </DetailGrid>
      ) : (
        <DetailGrid>
          <TextField
            label='username'
            variant='filled'
            disabled={locked}
            defaultValue={user.username}
          />
          <TextField
            label='email'
            variant='filled'
            disabled={locked}
            defaultValue={user.email}
          />
          <Grid container spacing={2}>
            {Object.keys(roles).map((role, i) => {
              return (
                <Grid item key={i}>
                  <Grid container item direction='column' justify='center'>
                    <Grid item>
                      <Typography>{role.toUpperCase()}</Typography>
                    </Grid>
                    <Checkbox
                      checked={roles[role]}
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
            {locked ? (
              <Grid item>
                <Fab onClick={unlock} color='primary'>
                  <LockOpenIcon />
                </Fab>
              </Grid>
            ) : (
              <Grid item>
                <Fab onClick={lock}>
                  <LockIcon />
                </Fab>
              </Grid>
            )}
            <Grid item>
              <Button variant='contained' disabled={locked}>
                nevermind
              </Button>
            </Grid>
          </Grid>
        </DetailGrid>
      )}
    </>
  )
}

export default Detail
