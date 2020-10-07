import React, { useContext } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Theme from './context'
const MuiProvider = ({ children }) => {
  const theme = useContext(Theme)
  const muiTheme = createMuiTheme(theme)
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}

export default MuiProvider
