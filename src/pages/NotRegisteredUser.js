import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm title='Signup' onSubmit={activateAuth} />
          <UserForm title='Login' onSubmit={activateAuth} />
        </>
      )
    }}
  </Context.Consumer>
)
