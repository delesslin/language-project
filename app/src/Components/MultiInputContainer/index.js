import React from 'react'
import { Grid, TextField, Fab, Chip } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
const StyledTagsGrid = styled(Grid)`
  min-height: 50px;
`

const MultiInputContainer = ({
  inputValue,
  handleChange = () => {},
  handleDelete = () => {},
  state = [],
  label = 'input',
  buttonClick = () => {},
  disabledInput = false,
}) => {
  return (
    <Grid
      item
      container
      direction='column'
      alignContent='flex-start'
      spacing={2}
    >
      <Grid item container justify='flex-start' xs={7} spacing={2}>
        <Grid item>
          <TextField
            value={inputValue}
            onChange={handleChange}
            required
            variant={disabledInput ? 'filled' : 'outlined'}
            label={label}
            disabled={disabledInput}
          ></TextField>
        </Grid>
        <Grid item>
          <Fab color='primary' aria-label='add' onClick={buttonClick}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <StyledTagsGrid item container>
        {state.map((item) => {
          return (
            <Chip
              key={item}
              label={item}
              clickable
              color='primary'
              onDelete={() => handleDelete(item)}
            />
          )
        })}
      </StyledTagsGrid>
    </Grid>
  )
}

export default MultiInputContainer
