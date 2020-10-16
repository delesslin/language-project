import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import Type from './Type'
import WordDisplay from './WordDisplay'
import Home from './Home'
import Tag from './Tag'
import Search from './Search'
import Request from './Request'
import GlobalTheme from '../Components/GlobalTheme'
import { Auth, Words } from '../context'
import NotFound from './NotFound'
import Game from './Games'
const Public = () => (
  <Words.Provider>
    <Switch>
      <Route path='/type'>
        <Type />
      </Route>
      <Route path='/word/:_id'>
        <WordDisplay />
      </Route>
      <Route path='/tags/:_tagname'>
        <Tag />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/request'>
        <Request />
      </Route>
      <Route path='/game'>
        <Game />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Words.Provider>
)
// move GlobalThem to App component
const Pages = () => {
  return (
    <Auth.Provider>
      <GlobalTheme>
        <Switch>
          <Route path='/admin'>
            <AdminPanel />
          </Route>
          <Route path='/'>
            <Public />
          </Route>
        </Switch>
      </GlobalTheme>
    </Auth.Provider>
  )
}

export default Pages
