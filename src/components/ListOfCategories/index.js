// React
import React, { useEffect, useState, Fragment } from 'react'

// Components
import { Category } from '../Category'

// Styles
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCagegories] = useState([])
  const [loading, setLoading] = useState([false])

  // equivalent to ComponentDidMount()
  // (effect, dependencies_needed_by_effect)
  // (e, []) => Excecuted just in first render
  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-server-jpleyvat-jpleyvat.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCagegories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key='loading'>
          <Category />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))
      )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
