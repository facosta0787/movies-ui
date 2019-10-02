import React from 'react'
import { InputSearch, IconSearch } from './styles'

const SearchBar = () => {
  return (
    <form>
      <InputSearch placeholder="Buscar ..." />
      <IconSearch className="fas fa-search" />
    </form>
  )
}

export default SearchBar
