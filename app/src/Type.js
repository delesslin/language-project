import React from 'react'
import { CopyKeyboard } from './Keyboard'

const Type = () => {
  return (
    <>
      <h4>
        OMG IT'S A KYBOARD
        <span role='img' aria-label='keyboard emoji'>
          ⌨
        </span>
      </h4>
      <CopyKeyboard />
    </>
  )
  // return (
  //   <Grid container direction='column'>
  //     <Container>
  //       <TextField value={text} onFocus={handleFocus} onBlur={handleBlur} />
  //     </Container>
  //   </Grid>
  // )
}

export default Type
