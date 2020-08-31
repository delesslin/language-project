import React from 'react'
// import logo from './logo.svg'
import { WrappersAndProviders } from './WrappersAndProviders'
import { Switcher } from './Switcher'

import { GlobalKeyboard } from './Keyboard'

function App() {
  return (
    <div className='App'>
      <WrappersAndProviders>
        <Switcher />
        <GlobalKeyboard />
      </WrappersAndProviders>
    </div>
  )
}

export default App
