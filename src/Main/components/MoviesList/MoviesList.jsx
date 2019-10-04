import React from 'react'
import times from 'lodash/times'
import MovieCard from '../MovieCard'
import { Container } from './styles'

const MoviesList = () => {
  return (
    <Container>
      {times(1200, () => (
        <MovieCard />
      ))}
    </Container>
  )
}

export default MoviesList
