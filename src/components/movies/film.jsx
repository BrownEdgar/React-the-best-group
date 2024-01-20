import React from 'react'
import './App.scss';

export default function film() {
  return (
    <div className='Movies'>
      {
        movies.map(movie => {
          return (
            <article className='Movies__cart' key={movie.id}>
              <div>
                <img src={movie.image} />
                <h2>{movie.name}  </h2>
                <h3>{movie.year}</h3>
              </div>

            </article>
          )
        })
      }

    </div>
  )
}
