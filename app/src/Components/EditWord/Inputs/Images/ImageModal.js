import { Button, Fab, Grid, TextField, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect } from 'react'
import { CardGrid } from '../../../../styled/Card'
import { ModalStandard } from '../../../../styled/Modals'
import searchWiki from '../../../../utils/searchWiki'
import ImgResult from './ImgResult'

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
    searchWiki(searchTerm, 30).then((results) => {
      console.log(results)
      setSearchResults(results)
    })
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
  }, [open, currentImages])
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
