import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import Signup from './pages/signup'

function App() {
  return (
    <Switch>
      <Route path='/signup' component={Signup} />
    </Switch>
  )
}

export default App
