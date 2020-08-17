import { Drawer, Grid, styled } from '@material-ui/core'
import React from 'react'
import LAYOUT from './layout.json'
import { Key } from './Key'
import { Close } from './Close'
const CustomKeyboard = () => {
  const KeyboardGrid = styled(Grid)({
    paddingBottom: '25px',
  })
  return (
    <>
      <Drawer anchor='bottom' open={true}>
        <KeyboardGrid container direction='column'>
          <Close />
          <Grid item container direction='column'>
            {LAYOUT.map((row) => {
              const keys = row.map((entry) => {
                return (
                  <Key key={`${entry.key}-${Math.random()}`} data={entry} />
                )
              })
              return (
                <Grid item container justify='center'>
                  {keys}
                </Grid>
              )
            })}
          </Grid>
        </KeyboardGrid>
      </Drawer>
    </>
  )
}

export default CustomKeyboard
