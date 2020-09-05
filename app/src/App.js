import React from 'react'
import { Switcher } from './Switcher'
// import logo from './logo.svg'
import { WrappersAndProviders } from './WrappersAndProviders'

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
