import React, { createContext, useState } from 'react'
import { NewWord } from './NewWord'
import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom'
import { useRecoilState, atom } from 'recoil'
import Login from './Login'
import Edit from './Edit'
import Landing from './Landing'
import BatchUpload from './BatchUpload'
import Export from './Export'
import useAuth from '../../utils/hooks/useAuth'
import Users from './Users'
import Signup from './Signup'
export const AuthContext = createContext()
export const AdminPanel = () => {
  const { loggedIn, token, error, login } = useAuth()
  const { path } = useRouteMatch()

  return (
    <AuthContext.Provider value={{ loggedIn, token, error, login }}>
      {loggedIn ? (
        <Router>
          <Route exact path={path}>
            <Landing />
          </Route>
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
        </Router>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  )
}
