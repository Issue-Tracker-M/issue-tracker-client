import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
