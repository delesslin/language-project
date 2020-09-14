import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminPanel } from '../../Pages/AdminPanel'
import Type from '../../Pages/Type'
import WordDisplay from '../../Pages/WordDisplay'

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
