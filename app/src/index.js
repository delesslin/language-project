import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { CssBaseline } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'

ReactDOM.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <App />
    </ScopedCssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
