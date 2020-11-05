import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
