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
  return (
    <div className='Posts'>
      {
        posts.map(animal => {
          return (
            <article className='Posts__cart' key={animal.id}>
              <h2 className='Posts__title'>{animal.title.toUpperCase()}</h2>
              <div className='Posts__content'>
                <img src={animal.image} />
                <p className='Posts__desc'>
                  {animal.desc}
                </p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}
