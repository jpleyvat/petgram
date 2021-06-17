import React from 'react'

// Components
import { Logo } from '../components/Logo'
import { ListOfCategories } from '../components/ListOfCategories'

// Containers
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
