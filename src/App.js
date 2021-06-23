import React, { ReactDOM, Fragment } from 'react'

// Components
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

// Pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

// Router
import { Router } from '@reach/router'

// Context
import Context from './Context'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo path='/' />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? (
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
              ) : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
              )}
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
