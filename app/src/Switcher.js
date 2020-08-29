import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomKeyboard from './Keyboard/Main'
import WordDisplay from './WordDisplay'
import KeyboardPage from './KeyboardPage'
import { AdminPanel } from './AdminPanel'

export const Switcher = () => {
  return (
    <Switch>
      <Route path='/admin'>
        <AdminPanel />
      </Route>
      <Route path='/keyboard'>
        <KeyboardPage />
      </Route>
      <Route path='/word/:_id' component={WordDisplay} />
      <Route path='/'>
        <h1>This is your home now 🌞 </h1>
      </Route>
    </Switch>
  )
}
