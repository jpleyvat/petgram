import React from 'react'
import ReactDOM from 'react-dom'
import Context from './Context'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-jpleyvat-jpleyvat.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error) => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid-token') {
      window.sessionStorage.removeItem('token')
      window.location.hrel = '/'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
