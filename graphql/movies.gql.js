import { gql } from 'apollo-boost'

export const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      id
      title
      synopsis
      year
      rating
      genres
      posterUrl
      url
    }
  }
`
