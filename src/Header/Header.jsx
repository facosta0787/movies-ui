import React from 'react'
import SearchBar from '../SearchBar'
import { Container, Header, Logo } from './styles'
import logo from '../../public/assets/img/logo.png'

const HeaderContainer = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <Logo src={logo} />
        </a>
        <SearchBar />
      </Header>
    </Container>
  )
}

export default HeaderContainer
