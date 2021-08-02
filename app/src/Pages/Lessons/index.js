import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import Declarative from './Declarative'

const Lessons = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route path={`${path}/declarative`}>
        <Declarative />
      </Route>
      <Route exact path={`${path}`}>
        <h1>lessons</h1>
      </Route>
    </Switch>
  )
}

export default Lessons
