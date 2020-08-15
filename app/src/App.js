import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// TODO: Implement React Router
// TODO: Admin page
// TODO: Public page
function App() {
  const [data, setData] = useState('cat')
  return (
    <div className='App'>
      <h1>Hello World! TEST</h1>
      <h3>We're learnign react</h3>
      <h4>{data}</h4>
    </div>
  )
}

export default App
