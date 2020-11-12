import React from 'react'
import { isMobile } from 'react-device-detect'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Page from 'Components/Page'
import useAPI from 'utils/hooks/useAPI'
import BatchUpload from './BatchUpload'
import Export from './Export'
import Landing from './Landing'
import Login from './Login'
import Requests from './Requests'
import Signup from './Signup'
import Users from './Users'
import Words from './Words'

const AdminRoute = ({ path, children }) => {
  const { roles } = useAPI()
  return (
    <Route path={path}>
      {roles.includes('admin') ? children : <Redirect to={path} />}
    </Route>
  )
}
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
    <Landing>
      {loggedIn ? (
        <Switch>
          <AdminRoute path={path + '/bulk-new'}>
            <BatchUpload />
          </AdminRoute>
          <AdminRoute path={path + '/export'}>
            <Export />
          </AdminRoute>
          <AdminRoute path={path + '/users/:_id?'}>
            <Users />
          </AdminRoute>
          <AdminRoute path={path + '/signup'}>
            <Signup />
          </AdminRoute>

          <Route path={path + '/requests'}>
            <Requests />
          </Route>

          <Route path={path + '/:_id?'}>
            <Words />
          </Route>
        </Switch>
      ) : (
        <Login />
      )}
    </Landing>
  )
}
