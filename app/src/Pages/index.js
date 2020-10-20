import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useAPI from '../utils/hooks/useAPI'
import { AdminPanel } from './AdminPanel'
import Game from './Games'
import Browse from './Browse'
import NotFound from './NotFound'
import Request from './Request'
import Search from './Search'
import Tag from './Tag'
import Type from './Type'
import WordDisplay from './WordDisplay'

const Public = () => (
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
    <Route path='/browse'>
      <Redirect to='/' />
    </Route>
    <Route exact path='/'>
      <Browse />
    </Route>
    <Route>
      <NotFound />
    </Route>
  </Switch>
)
// move GlobalThem to App component
const Pages = () => {
  return (
    <Switch>
      <Route path='/admin'>
        <AdminPanel />
      </Route>
      <Route path='/'>
        <Public />
      </Route>
    </Switch>
  )
}

export default Pages
