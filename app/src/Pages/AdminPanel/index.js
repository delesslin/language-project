import React from 'react'
import { NewWord } from './NewWord'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useRecoilState, atom } from 'recoil'
import Login from './Login'
import Edit from './Edit'
import Landing from './Landing'
import BatchUpload from './BatchUpload'
import Export from './Export'
const LOGIN_ATOM = atom({
  key: 'LOGIN_ATOM',
  default: true,
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
        <Route path={path + '/bulk-new'}>
          <BatchUpload />
        </Route>
        <Route path={path + '/export'}>
          <Export />
        </Route>
        <Route path={path + '/users'}>
          <h1>
            Let's manage users
            <span role='img' aria-label='superhero'>
              🦸
            </span>
          </h1>
          <h2>
            But not everyone with access to admin panel should be able to edit
            this
            <span role='img' aria-label='cake'>
              🍰
            </span>
          </h2>
        </Route>
        <Route path={path + '/edit/:_id'}>
          <Edit />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    )
  } else {
    return <Login setLogin={setIsLoggedIn} />
  }
}
