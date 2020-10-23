import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import Signup from './pages/signup'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
