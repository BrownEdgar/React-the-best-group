import React from 'react'
import "./Posts.scss"
import PropTypes from 'prop-types'

Posts.propTypes = {
  age: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default function Posts({ posts }) {
  return (
    <div className='Posts'>
      {
        posts.map(animal => {
          return (
            <article className='Posts__cart' key={animal.id}>
              <h2 className='Posts__title'>{animal.title.toUpperCase()}</h2>
              <div className='Posts__content'>
                <img src={animal.image} />
                <p className='Posts__desc'>{animal.desc}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
