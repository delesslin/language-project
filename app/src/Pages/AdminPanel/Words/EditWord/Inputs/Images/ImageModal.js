import { TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import searchWiki from 'utils/searchWiki'
import { Button, Paper, Text } from 'Components/Surfaces'
import { SearchIcon } from 'Components/Surfaces/Icon'
import Modal from 'Components/Surfaces/Modal'
import ImgResult from './ImgResult'
const ImgSearchDiv = styled.div`
  padding: 20px;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto minmax(500px, 1fr) auto;
  grid-auto-flow: columns;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
`
const ImageResults = styled.div`
  y-overflow: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr)
  grid-gap: 10px;
  min-height:400px;
`
const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  place-items: stretch;

  justify-content: center;
  > * {
    padding: 10px 25px;
  }
`
const ImageModal = ({ open, save, close, currentImages }) => {
  const [error, setError] = useState(null)
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
    searchWiki(searchTerm, 30)
      .then((results) => {
        setSearchResults(results)
      })
      .catch((e) => {
        setError(e)
      })
  }
  const handleSave = () => {
    save(selected)
    close()
  }
  const handleClose = () => {
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
    <Modal open={open} handleClose={handleClose}>
      <ImgSearchDiv>
        <div>
          <Text size={1.5}>Search for Public Domain images by term</Text>
        </div>
        <div>
          <TextField
            label='search term'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
          />
          {error != null ? (
            <Paper color='red'>
              <Text>
                Error searching that term. Please close this window and try
                again
              </Text>
            </Paper>
          ) : null}
          <Button
            size={2.5}
            color='primary'
            round={true}
            onClick={handleSearch}
          >
            <SearchIcon />
          </Button>
        </div>
        <ImageResults>
          {searchResults.map((result, i) => {
            return (
              <ImgResult
                result={result}
                add={addSelected}
                remove={removeSelected}
                selections={selected}
                key={i}
              />
            )
          })}
        </ImageResults>
        <Buttons>
          <Button onClick={handleSave} color='secondary'>
            SAVE
          </Button>
          <Button onClick={handleClose} color='green'>
            Nevermind
          </Button>
        </Buttons>
      </ImgSearchDiv>
    </Modal>
  )
  // return (
  //   <Modal open={true}>
  //     <Grid container direction='column' spacing={2}>
  //       <Grid item container justify='center'>
  //         <Grid item>
  //           <Typography>Search for related images</Typography>
  //         </Grid>
  //       </Grid>
  //       <Grid container item spacing={2}>
  //         <Grid item>
  //         </Grid>
  //         <Grid item>
  //           <Fab onClick={handleSearch}>
  //             <SearchIcon />
  //           </Fab>
  //         </Grid>
  //       </Grid>
  //       <CardGrid>

  //       </CardGrid>
  //       <Grid item container spacing={1}>
  //         <Grid item>
  //           <Button onClick={handleSave} variant='contained' color='primary'>
  //             add selected images
  //           </Button>
  //         </Grid>
  //         <Grid item>
  //           <Button onClick={handleClose} variant='contained'>
  //             nevermind
  //           </Button>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </Modal>
  // )
}

export default ImageModal
