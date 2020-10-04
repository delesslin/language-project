import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import EditWord from '../../../Components/EditWord'
import Loading from '../../../Components/Loading'
import { Words } from '../../../context'
import axios from 'axios'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import StyledLink from '../../../styled/StyledLink'
import DeleteModal from './DeleteModal'

const Edit = () => {
  const { words } = useContext(Words.Context)
  const [openDelete, setOpenDelete] = useState(false)
  const {
    params: { _id },
  } = useRouteMatch()
  const [initialState, setInitialState] = React.useState(null)
  useEffect(() => {
    setInitialState(words.find((entry) => entry._id === _id))
  }, [words])

  const handleUpdate = (obj) => {
    // send to update api
    axios.patch(`/api/words/${_id}`, obj).then((res) => {
      console.log(res)
    })
  }
  if (initialState === null) {
    return <Loading />
  } else {
    return (
      <>
        <Paper>
          <Grid container direction='column' spacing={3}>
            <Grid item>
              <Typography variant='h4'>
                Let edit entry with id #{_id}
              </Typography>
            </Grid>
            <Grid item>
              <EditWord data={initialState} onSave={handleUpdate}>
                <Grid item>
                  <StyledLink to='/admin'>
                    <Button>nevermind</Button>
                  </StyledLink>
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    color='secondary'
                    onClick={() => setOpenDelete(true)}
                  >
                    delete
                  </Button>
                </Grid>
              </EditWord>
            </Grid>
          </Grid>
        </Paper>
        <DeleteModal open={openDelete} _id={_id} toggleOpen={setOpenDelete} />
      </>
    )
  }
}

export default Edit
