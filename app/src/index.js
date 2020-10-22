import React from 'react'
import ReactDOM from 'react-dom'
// which one??? vvv
// import { CssBaseline } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Pages from './Pages'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Layout'
import { Words } from './context'
import { Normalize } from 'styled-normalize'
// TODO: Move app contents into ReactDOM.render
// TODO: Refactor to remove RecoilRoot
import { createGlobalStyle } from 'styled-components'
import GlobalTheme from './Components/GlobalTheme'
import { APIProvider } from './utils/hooks/useAPI'
import { setBreakPoints, getBreakPoints } from 'css-in-js-media'
// const bp = getBreakPoints()
// setBreakPoints({
//   ...bp,
//   smallTablet: 500,
// })
const GlobalStyle = createGlobalStyle`
html,
body,
#root {
  width: 100%;
  height: 100%;
}
`
// Move WordProvider to Pages
export const App = () => {
  return (
    <React.Fragment>
      <Normalize />
      <GlobalStyle />
      <GlobalTheme>
        <APIProvider>
          <RecoilRoot>
            <Router>
              <Layout>
                <Pages />
              </Layout>
            </Router>
          </RecoilRoot>
        </APIProvider>
      </GlobalTheme>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
