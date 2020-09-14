import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Pages from './Pages'
// import logo from './logo.svg'
import { WrappersAndProviders } from './Components/WrappersAndProviders'

function App() {
  return (
    <div className='App'>
      <WrappersAndProviders>
        <Pages />
      </WrappersAndProviders>
    </div>
  )
}

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
