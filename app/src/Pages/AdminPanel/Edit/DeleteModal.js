import {
  Button,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import useAPI from '../../../utils/hooks/useAPI'
const ModalDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`
const ModalPaper = styled(Paper)`
  min-height: 30vh;
  min-width: 30vw;
  padding: 25px;
  display: grid;
  place-items: center;
`
const DeleteModal = ({ _id, open, toggleOpen }) => {
  const { refetchWords } = useAPI()
  const [confirm, setConfirm] = React.useState('')
  const { Words } = useAPI()
  const history = useAPI()
  const lastFour = _id.slice(-4)
  const handleDelete = () => {
    Words.delete(_id)
      .then((res) => {
        // refetch words
        refetchWords()
        history.push('/admin')
      })
      .catch((e) => console.error(e))
  }
  return (
    <Modal open={open}>
      <ModalDiv>
        <ModalPaper>
          <Grid container direction='column' spacing={2} alignItems='center'>
            <Grid item>
              <Typography variant='h5'>
                {' '}
                ⚠ Are you sure you want to delete? ⚠{' '}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                This will permanently delete this word, forever.
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                If you'd like to delete this word, please type in the last 4
                digits of the word ID
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <b>{`ID: ${_id}`}</b>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                variant='outlined'
                value={confirm}
                onChange={(e) => setConfirm(e.currentTarget.value)}
              />
            </Grid>
            <Grid item container spacing={5} justify='center'>
              <Grid item>
                <Button
                  variant='outlined'
                  color='secondary'
                  disabled={confirm !== lastFour}
                  onClick={handleDelete}
                >
                  delete forever
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={() => toggleOpen(false)}>NEVERMIND!!!</Button>
              </Grid>
            </Grid>
          </Grid>
        </ModalPaper>
      </ModalDiv>
    </Modal>
  )
}

export default DeleteModal
