import { Grid, Paper, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import parseCSV from '../../../utils/parseCSV'
import FileButton from './FileButton'
import { Button } from '@material-ui/core'

import axios from 'axios'

import { DeleteTable, EditTable } from '../../../Components/WordTable'
import { Words } from '../../../context'
import WarningMsg from './WarningMsg'
import styled from 'styled-components'
const PreviewPaper = styled(Paper)`
  padding: 15px 20px;
  margin-bottom: 25px;
`

// TODO: Confirmation
const split = (str) => {
  const noSemi = str.split(';')
  if (noSemi[0].length === 0) {
    return []
  }
  const noSlash = noSemi.reduce((acc, curr) => {
    return [...acc, ...curr.split('/')]
  }, [])
  return noSlash
}
const BatchUpload = () => {
  const [state, setState] = useState([])
  const { words } = useContext(Words.Context)
  const handleChange = (e) => {
    const file = e.target.files[0]
    parseCSV(file)
      .then((res) => {
        // console.log(res)
        // setState(res.data)
        return res.data
      })
      .then((words) => {
        return words.map((word) => {
          return {
            ...word,
            pronunciation: split(word.pronunciation),
            alternative_spellings: split(word.alternative_spellings),
            translations: split(word.translations),
            tags: split(word.tags),
            images: word.images.split(';'),
            recordings: split(word.recordings),
            notes: split(word.notes),
          }
        })
      })
      .then((data) => {
        return data.map((entry) => {
          const i = words.findIndex(
            (word) => word.language_entry === entry.language_entry
          )
          if (i < 0) {
            return entry
          } else {
            return {
              ...entry,
              error: 'There is already an entry for this word',
            }
          }
        })
      })
      // .then(console.log)
      .then((data) => setState(data))
    // check data against words & add .error if there is a match
    // setState
  }
  const handleDelete = (i) => {
    console.log(`OMG DELETE ${i}`)
    setState((state) => {
      return state.filter((entry, index) => index !== i)
    })
  }
  const handleSubmit = () => {
    axios.post('/api/batch', state).then((res) => {
      console.log(res)
    })
  }
  return (
    <Grid container direction='column' spacing={3}>
      <Grid item>
        <Typography variant='h3'>BATCH UPLOAD</Typography>
      </Grid>
      <Grid item>
        <FileButton handleChange={handleChange} />
      </Grid>
      <Grid item>
        {state.length > 0 ? (
          <PreviewPaper>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography variant='h4'>Preview</Typography>
              </Grid>
              <Grid item>
                <WarningMsg />
              </Grid>
              <Grid item>
                <DeleteTable words={state} handleDelete={handleDelete} />
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  onClick={handleSubmit}
                  variant='contained'
                >
                  submit
                </Button>
              </Grid>
            </Grid>
          </PreviewPaper>
        ) : null}
      </Grid>
    </Grid>
  )
}

export default BatchUpload
