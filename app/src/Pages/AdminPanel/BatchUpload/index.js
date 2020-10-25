import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { DeleteTable } from '../../../Components/WordTable'
import useBatchUpload from '../../../utils/hooks/useBatchUpload'
import FileButton from './FileButton'
import WarningMsg from './WarningMsg'

const PreviewPaper = styled(Paper)`
  padding: 15px 20px;
  margin-bottom: 25px;
`
const ErrorPaper = styled(Paper)`
  width: 100%;
  min-height: 75px;
  background: rgb(233, 112, 85);
  background: linear-gradient(
    292deg,
    rgba(233, 112, 85, 1) 18%,
    rgba(233, 148, 170, 1) 100%
  );
  display: grid;
  place-items: center start;
  padding: 20px 20px;
`
// TODO: handleError

const BatchUpload = () => {
  const { state, onChange, onDelete, onSubmit, error } = useBatchUpload()
  useEffect(() => {
    console.log(error.message)
  }, [error])
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item>
        <Typography variant='h3'>BATCH UPLOAD</Typography>
      </Grid>
      {error !== false ? (
        <Grid item>
          <ErrorPaper>
            <Typography variant='h6'>
              There was a problem, please upload a new document.
            </Typography>
          </ErrorPaper>
        </Grid>
      ) : null}
      <Grid item>
        <FileButton handleChange={onChange} />
      </Grid>
      {state.length > 0 ? (
        <Grid item>
          <PreviewPaper>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography variant='h4'>Preview</Typography>
              </Grid>
              <Grid item>
                <WarningMsg />
              </Grid>
              <Grid item>
                <DeleteTable words={state} handleDelete={onDelete} />
              </Grid>
              <Grid item>
                <Button color='primary' onClick={onSubmit} variant='contained'>
                  submit
                </Button>
              </Grid>
            </Grid>
          </PreviewPaper>
        </Grid>
      ) : null}
    </Grid>
  )
}

export default BatchUpload
