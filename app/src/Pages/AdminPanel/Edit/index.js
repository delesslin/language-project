import { Button, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import EditWord from '../../../Components/EditWord'
import Loading from '../../../Components/Loading'
import Page from '../../../Components/Page'
import StyledLink from '../../../styled/StyledLink'
import useAPI from '../../../utils/hooks/useAPI'
import DeleteModal from './DeleteModal'

const Edit = () => {
  const { words } = useAPI()
  const [openDelete, setOpenDelete] = useState(false)
  const {
    params: { _id },
  } = useRouteMatch()
  const [initialState, setInitialState] = React.useState(null)
  const history = useAPI()
  const { Words: WordsAPI } = useAPI()
  useEffect(() => {
    setInitialState(words.find((entry) => entry._id === _id))
  }, [words, _id])

  const handleUpdate = (obj) => {
    // send to update api
    WordsAPI.update(_id, obj)
      .then((res) => {
        console.log(res)
        history.push('/admin')
      })
      .catch((e) => console.error(e))
  }
  if (initialState === null) {
    return <Loading />
  } else {
    return (
      <>
        <Page title='edit'>
          <Grid container direction='column' spacing={3}>
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
        </Page>
        <DeleteModal open={openDelete} _id={_id} toggleOpen={setOpenDelete} />
      </>
    )
  }
}

export default Edit
