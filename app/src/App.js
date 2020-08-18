import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { NewWord } from './NewWord/Main'
import { WrappersAndProviders } from './WrappersAndProviders'
import { Switch, Route } from 'react-router-dom'
import CustomKeyboard from './Keyboard/Main'
import WordDisplay from './WordDisplay'

const Switcher = () => {
  return (
    <Switch>
      <Route path='/entry'>
        <NewWord />
      </Route>
      <Route path='/keyboard'>
        <CustomKeyboard />
      </Route>
      <Route path='/word/:_id' component={WordDisplay} />

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
