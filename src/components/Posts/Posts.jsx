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
              <img src={animal.image} />
              <div className='Posts__info'>
                <p className='Posts__name'>{animal.name.toUpperCase()}</p>
                <h2 className='Posts__title'>{animal.title}</h2>
                <p className='Posts__desc'>{animal.desc}</p>
                <a href="" className='Posts__button'>{animal.button}</a>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
