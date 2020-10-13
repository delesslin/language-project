import React, { useEffect } from 'react'
import { Fab, Grid, Typography, TextField, Button } from '@material-ui/core'
import { ModalStandard } from '../../../../styled/Modals'
import SearchIcon from '@material-ui/icons/Search'
import searchWiki from '../../../../utils/searchWiki'
import styled from 'styled-components'

import ImgResult from './ImgResult'
import { CardGrid } from '../../../../styled/Card'
// TODO: Should be able to highlight images that you want to add
// TODO: SHould be able to click to unhighlight images you no longer want to add

const ResultsGrid = styled(Grid)`
  min-height: 600px;
`
const ImageModal = ({ open, save, close, currentImages }) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])
  const [selected, setSelected] = React.useState([])
  const addSelected = (img) => {
    setSelected([...selected, img])
  }
  const removeSelected = (img) => {
    setSelected(selected.filter((entry) => entry !== img))
  }

  const handleSearch = () => {
    console.log(`searching for ${searchTerm}`)
    searchWiki(searchTerm, 30).then((results) => setSearchResults(results))
  }
  const handleSave = () => {
    console.log('saving!')
    save(selected)
    close()
  }
  const handleClose = () => {
    console.log('closing!')
    close()
  }
  useEffect(() => {
    if (open) {
      setSelected(currentImages)
    } else {
      setSearchTerm('')
      setSearchResults([])
    }
  }, [open])
  return (
    <ModalStandard open={open} width='90vw' height='75vh'>
      <Grid container direction='column' spacing={2}>
        <Grid item container justify='center'>
          <Grid item>
            <Typography>Search for related images</Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item>
            <TextField
              label='search term'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
          </Grid>
          <Grid item>
            <Fab onClick={handleSearch}>
              <SearchIcon />
            </Fab>
          </Grid>
        </Grid>
        <CardGrid>
          {searchResults.map((result) => {
            return (
              <ImgResult
                result={result}
                add={addSelected}
                remove={removeSelected}
                selections={selected}
              />
            )
          })}
        </CardGrid>
        <Grid item container spacing={1}>
          <Grid item>
            <Button onClick={handleSave} variant='contained' color='primary'>
              add selected images
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClose} variant='contained'>
              nevermind
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ModalStandard>
  )
}

export default ImageModal
