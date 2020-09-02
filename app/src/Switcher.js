import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { GlobalKeyboard } from './Keyboard'
import WordDisplay from './WordDisplay'
import Type from './Type'
import { AdminPanel } from './AdminPanel'

export const Switcher = () => {
  return (
    <>
      <Switch>
        <Route path='/admin'>
          <AdminPanel />
        </Route>
        <Route path='/type'>
          <Type />
        </Route>
        <Route path='/word/:_id'>
          <WordDisplay />
        </Route>
        <Route path='/'>
          <h1>
            This is your home now{' '}
            <span role='img' aria-label='sunshine'>
              🌞
            </span>{' '}
          </h1>
        </Route>
      </Switch>
    </>
  )
}
