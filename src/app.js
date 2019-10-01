import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
  }
`

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <h1>Hola Mundo!</h1>
    </Fragment>
  )
}

export default App
