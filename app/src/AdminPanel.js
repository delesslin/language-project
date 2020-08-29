import React from 'react'
import { NewWord } from './NewWord/Main'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
export const AdminPanel = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={path + '/new'}>
        <NewWord />
      </Route>
      <Route path='/'>
        <h1>This is the admin login ☮ </h1>
      </Route>
    </Switch>
  )
}
