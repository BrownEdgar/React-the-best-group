<<<<<<< HEAD
import React from 'react'
import "./Posts.scss"
import PropTypes from 'prop-types'

Posts.propTypes = {
  age: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default function Posts({ posts }) {
=======
import './Posts.scss'

import PropTypes from 'prop-types' // imbr

Posts.propTypes = {

  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string
}

Posts.defaultProps = {
  posts: [],
  title: 'default title'
}



export default function Posts({ posts, title }) {
  console.log(title)
>>>>>>> 5b22ae7a19b7b7a4bd329fbcfd411b4b0171713b
  return (
    <div className='Posts'>
      {
        posts.map(animal => {
          return (
            <article className='Posts__cart' key={animal.id}>
<<<<<<< HEAD
              <img src={animal.image} />
              <div className='Posts__info'>
                <p className='Posts__name'>{animal.name.toUpperCase()}</p>
                <h2 className='Posts__title'>{animal.title}</h2>
                <p className='Posts__desc'>{animal.desc}</p>
                <a href="" className='Posts__button'>{animal.button}</a>
=======
              <h2 className='Posts__title'>{animal.title.toUpperCase()}</h2>
              <div className='Posts__content'>
                <img src={animal.image} />
                <p className='Posts__desc'>
                  {animal.desc}
                </p>
>>>>>>> 5b22ae7a19b7b7a4bd329fbcfd411b4b0171713b
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
