import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import Type from './Type'
import WordDisplay from './WordDisplay'
import Home from './Home'
import Tag from './Tag'
import Search from './Search'

const Pages = () => {
  return (
    <Switch>
      <Route path='/admin'>
        <AdminPanel />
      </Route>
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
      <Route exact path='/'>
        <Home />
      </Route>
      <Route>
        <h1>Oh nooooo! WE CAN'T FIND THAT PAGE!!! ⚠ </h1>
      </Route>
    </Switch>
  )
}

export default Pages
