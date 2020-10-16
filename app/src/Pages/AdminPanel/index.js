import React, { createContext, useContext } from 'react'
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom'
import { Auth, Words } from '../../context'
import useAuth from '../../utils/hooks/useAuth'
import BatchUpload from './BatchUpload'
import Edit from './Edit'
import Export from './Export'
import Landing from './Landing'
import Login from './Login'
import { NewWord } from './NewWord'
import Signup from './Signup'
import Users from './Users'
import { isMobile } from 'react-device-detect'
import { Page } from '../../styled/Layout'

export const AdminPanel = () => {
  const { loggedIn } = useContext(Auth.Context)
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
        <Words.Provider>
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
            <Route path={path + '/users'}>
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
        </Words.Provider>
      ) : (
        <Login />
      )}
    </>
  )
}
