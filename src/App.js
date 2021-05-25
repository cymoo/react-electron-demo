import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import MainLayout from './pages/MainLayout'
import User from './pages/User'
import Play from './pages/Play'
import { UserProvider } from './context/user'

import './index.css'

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={User} />
            <Route path="/play" component={Play} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
