import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import Type from './Type'
import WordDisplay from './WordDisplay'

const Pages = () => {
  return (
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
  )
}

export default Pages
