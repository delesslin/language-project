import React from 'react'
import Theme from './context'
import StyledProvider from './StyledProvider'
const defaultTheme = {
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
}
// TODO: move theme context into this file
// TODO: add media breakpoints
const GlobalTheme = ({ children }) => {
  // const [state, setState] = useState(defaultTheme)
  const state = defaultTheme
  return (
    <Theme.Provider value={state}>
      <StyledProvider>{children}</StyledProvider>
    </Theme.Provider>
  )
}

export default GlobalTheme
