import React from 'react'
import MovieCard from '../MovieCard'
import { Container } from './styles'

const MoviesList = () => {
  return (
    <Container>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Container>
  )
}

export default MoviesList
