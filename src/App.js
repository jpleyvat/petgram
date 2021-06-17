import React, { ReactDOM, Fragment } from 'react'

// Components
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'

// Containers
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

// Pages
import { Home } from './pages/Home'

// Router
import { Router } from '@reach/router'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo path='/' />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:categoryId' />
        </Router>
      )}
    </div>
  )
}
