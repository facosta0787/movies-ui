import React from 'react'
// import { useQuery } from '@apollo/react-hooks'
// import { GET_MOVIES } from '../../graphql/movies.gql'
import MoviesList from './components/MoviesList'
import { MainContainer, Subtitle } from './styles'

const Main = () => {
  // const { loading, error, data } = useQuery(GET_MOVIES)

  return (
    <MainContainer>
      <Subtitle>Películas</Subtitle>
      <MoviesList />
    </MainContainer>
  )
}

export default Main
