import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Layout } from './Layout'
import { NewWord } from './NewWord/Main'
import { RecoilRoot } from 'recoil'
function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <Layout>
          <NewWord />
        </Layout>
      </RecoilRoot>
    </div>
  )
}

export default App
