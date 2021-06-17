import React, { ReactDOM } from 'react'

// Components
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </div>
)
