import React, { useState } from 'react'
import Theme from './context'
import MuiProvider from './MuiProvider'
import StyledProvider from './StyledProvider'

const GlobalTheme = ({ children }) => {
  const [state, setState] = useState({
    palette: {
      primary: {
        main: '#00ff00',
      },
    },
  })
  return (
    <Theme.Provider value={state}>
      <MuiProvider>
        <StyledProvider>{children}</StyledProvider>
      </MuiProvider>
    </Theme.Provider>
  )
}

export default GlobalTheme
