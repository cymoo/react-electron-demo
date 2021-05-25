import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import MainLayout from './pages/MainLayout'
import User from './pages/User'
import Play from './pages/Play'
import { UserProvider } from './context/user'

import './index.css'

const App = () => {
  return (
    <UserProvider>
      <HashRouter>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={User} />
            <Route path="/play" component={Play} />
          </Switch>
        </MainLayout>
      </HashRouter>
    </UserProvider>
  )
}

export default App
