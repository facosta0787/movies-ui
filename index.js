import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import App from './src/App'

import 'reset-css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const client = new ApolloClient({
  uri: 'http://localhost:3000/api'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
