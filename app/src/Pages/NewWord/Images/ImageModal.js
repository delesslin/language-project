import React from 'react'
import { Fab, Grid, Typography, TextField, Button } from '@material-ui/core'
import { ModalStandard } from '../../../styled/Modals'
import SearchIcon from '@material-ui/icons/Search'
import searchWiki from '../../../utils/searchWiki'
import styled from 'styled-components'
// TODO: Should be able to highlight images that you want to add
// TODO: SHould be able to click to unhighlight images you no longer want to add
// TODO: refactor using img tag as background images are likely not accessible
const StyledImgDiv = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.src});
`
const ResultsGrid = styled(Grid)`
  min-height: 600px;
`
const ImageModal = ({ open }) => {
  const [searchTerm, setSearchTerm] = React.useState('')
  const [searchResults, setSearchResults] = React.useState([])

  const handleSearch = () => {
    console.log(`searching for ${searchTerm}`)
    searchWiki(searchTerm, 30).then((results) => setSearchResults(results))
  }
  const handleSave = () => {
    console.log('saving!')
  }
  const handleClose = () => {
    console.log('closing!')
  }
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
        <ResultsGrid item container spacing={1}>
          {searchResults.map((result) => {
            return (
              <Grid item key={result}>
                <StyledImgDiv size='150px' src={result} />
              </Grid>
            )
          })}
        </ResultsGrid>
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
