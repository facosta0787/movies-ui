import React from 'react'
import { Card, CardContent } from './styles'

const MovieCard = () => {
  return (
    <Card>
      <CardContent>
        <figure>
          <img
            src="https://via.placeholder.com/185x278.png"
            width="100%"
            alt="Movie title"
          />
        </figure>
        <h4 style={{ fontSize: 14, paddingTop: 18 }}>Movie title</h4>
        <p style={{ fontSize: 12, color: '#757A7D', paddingTop: 10 }}>Year</p>
      </CardContent>
    </Card>
  )
}

export default MovieCard
