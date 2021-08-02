import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import GlobalTheme from './Components/GlobalTheme'
import Layout from './Components/Layout'
import Pages from './Pages'
import { APIProvider } from './utils/hooks/useAPI'
// TODO: Move app contents into ReactDOM.render

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;

}
html {
  overflow-y: scroll;
  overflow-x: hidden;

}
`

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <GlobalTheme>
      <APIProvider>
        <Router>
          <Layout>
            <Pages />
          </Layout>
        </Router>
      </APIProvider>
    </GlobalTheme>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
