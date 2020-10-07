import React, { useContext } from 'react'
import Theme from './context'
import { ThemeProvider } from 'styled-components'

const StyledProvider = ({ children }) => {
  const theme = useContext(Theme)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default StyledProvider
