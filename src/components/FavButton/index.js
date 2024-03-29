import React from 'react'
//
// Styles
import { Button } from './styles'

// Icons
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />
      {likes} likes!
    </Button>
  )
}
