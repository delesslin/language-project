import React, { useState } from 'react'
import logo from './logo.svg'
import Header from './Header'
import './App.css'
import { Paper, Button, TextField } from '@material-ui/core'
// TODO: Implement React Router
// TODO: Admin page
// TODO: Public page

function App() {
  return (
    <div className='App'>
      <Header />

      <Paper>
        <TextField varient='filled' />
        <Button onClick={() => console.log('clicked')}>Submit</Button>
      </Paper>
    </div>
  )
}

export default App
