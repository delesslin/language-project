import React from 'react'
import ReactDOM from 'react-dom'

import { CssBaseline } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Pages from './Pages'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Layout'

// TODO: Move app contents into ReactDOM.render
// TODO: Refactor to remove RecoilRoot
export const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Layout>
          <Pages />
        </Layout>
      </Router>
    </RecoilRoot>
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
