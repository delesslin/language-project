import React from 'react'
import { NewWord } from './NewWord/Main'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useRecoilState, atom } from 'recoil'
import { Login } from './Login'
const LOGIN_ATOM = atom({
  key: 'LOGIN_ATOM',
  default: false,
})
export const AdminPanel = () => {
  const { path } = useRouteMatch()
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LOGIN_ATOM)
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path={path + '/new'}>
          <NewWord />
        </Route>
        <Route path='/'>
          <h1>This is the admin page ☮ </h1>
        </Route>
      </Switch>
    )
  } else {
    return <Login setLogin={setIsLoggedIn} />
  }
}
