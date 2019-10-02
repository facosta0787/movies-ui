import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_MOVIES } from '../../graphql/movies.gql'
import { MainContainer } from './styles'

const Main = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)

  console.log(data)
  return (
    <MainContainer>
      <h3>Peliculas</h3>
      {error && 'Error al leer las peliculas'}
      {loading && 'Cargando ...'}
      {data && data.getMovies.map(movie => <p key={movie.id}>{movie.title}</p>)}
    </MainContainer>
  )
}

export default Main
