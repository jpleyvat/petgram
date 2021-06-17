import React from 'react'

// Styles
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'
export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <button>
          <MdHome size={SIZE} />
        </button>
      </Link>
      <Link to='/favs'>
        <button>
          <MdFavoriteBorder size={SIZE} />
        </button>
      </Link>
      <Link to='/user'>
        <button>
          <MdPersonOutline size={SIZE} />
        </button>
      </Link>
    </Nav>
  )
}
