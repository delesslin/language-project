import React, { useState } from 'react'
// import logo from './logo.svg'
import { WrappersAndProviders } from './WrappersAndProviders'
import { Switcher } from './Switcher'
import { atom } from 'recoil'

function App() {
  return (
    <div className='App'>
      <WrappersAndProviders>
        <Switcher />
      </WrappersAndProviders>
    </div>
  )
}

export default App
