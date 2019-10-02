import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from './Header'
import Main from './Main'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: #F5F7FA
  }
`

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Main />
    </Fragment>
  )
}

export default App
