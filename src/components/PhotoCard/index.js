import React, { Fragment, useEffect, useRef, useState } from 'react'

// Styles
import { Article, ImgWraper, Img, Button } from './styles'

// Icons
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (e) {
      console.error(e)
      return false
    }
  })

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    }, [element])
  })

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWraper>
              <Img src={src} />
            </ImgWraper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
