import React from 'react'
import { isMobile } from 'react-device-detect'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Page from '../../Components/Page'
import { Words } from '../../context'
import useAPI from '../../utils/hooks/useAPI'
import BatchUpload from './BatchUpload'
import Edit from './Edit'
import Export from './Export'
import Landing from './Landing'
import Login from './Login'
import { NewWord } from './NewWord'
import Signup from './Signup'
import Users from './Users'

export const AdminPanel = () => {
  const { loggedIn } = useAPI()
  const { path } = useRouteMatch()
  if (isMobile) {
    return (
      <Page title='admin panel only available on Desktop Browsers'>
        <h3>⚠ ⚠ ⚠</h3>
      </Page>
    )
  }
  return (
    <>
      {loggedIn ? (
        <Switch>
          <Route path={path + '/new'}>
            <NewWord />
          </Route>
          <Route path={path + '/bulk-new'}>
            <BatchUpload />
          </Route>
          <Route path={path + '/export'}>
            <Export />
          </Route>
          <Route path={path + '/users/:_id?'}>
            <Users />
          </Route>
          <Route path={path + '/signup'}>
            <Signup />
          </Route>
          <Route path={path + '/edit/:_id'}>
            <Edit />
          </Route>
          <Route path={path + '/:_id?'}>
            <Landing />
          </Route>
        </Switch>
      ) : (
        <Login />
      )}
    </>
  )
}
