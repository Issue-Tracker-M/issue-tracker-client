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
import ConfirmEmail from './pages/ConfirmEmail'
import ResetPassword from './pages/ResetPassword'

// Utils
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot_password" component={ForgotPassword} />
        <Route path="/reset/:token" component={ResetPassword} />
        <Route path="/confirm/:token" component={ConfirmEmail} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
