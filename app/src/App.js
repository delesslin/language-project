import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { NewWord } from './NewWord/Main'
import { WrappersAndProviders } from './WrappersAndProviders'
import { Switch, Route } from 'react-router-dom'

const Switcher = () => {
  return (
    <Switch>
      <Route path='/entry'>
        <NewWord />
      </Route>
      <Route path='/keyboard'>
        <h1>KEYYYYBBBBOOOOAAAAAARDDDD</h1>
      </Route>
      <Route path='/word'>
        <h1>LOOK AT THIS WORDddd</h1>
      </Route>
      <Route path='/'>
        <h1>This is your home now 🌞 </h1>
      </Route>
    </Switch>
  )
}
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
