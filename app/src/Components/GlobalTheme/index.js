import React, { useState } from 'react'
import Theme from './context'
import MuiProvider from './MuiProvider'
import StyledProvider from './StyledProvider'

const GlobalTheme = ({ children }) => {
  const [state, setState] = useState({
    primary: '#fbc10b',
    secondary: '#0bbcee',
    green: '#41b2a2',
    red: '#f25a38',
    dark: '#051940',
    light: '#F8F1FF',
    black: '#111',
    white: '#eee',
    fonts: {
      secondary: "font-family: 'DM Serif Text', serif;",
      primary: "font-family: 'Lato', sans-serif;",
    },
  })
  return (
    <Theme.Provider value={state}>
      <StyledProvider>{children}</StyledProvider>
    </Theme.Provider>
  )
}

export default GlobalTheme
