import React from 'react'
import { Layout } from './Layout'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router } from 'react-router-dom'
export const WrappersAndProviders = ({ children }) => {
  return (
    <RecoilRoot>
      <Router>
        <Layout>{children}</Layout>
      </Router>
    </RecoilRoot>
  )
}
