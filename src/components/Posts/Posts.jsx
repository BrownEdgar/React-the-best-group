
import './Posts.scss'
import PropTypes from 'prop-types'

Posts.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string
}
export default function Posts({ posts }) {
  return (
    <div className='Posts'>
      {
        posts.map(car => {
          return (
            <article className='Posts__cart' key={car.id}>
              <div className='Posts__content'>
                <img src={car.image} />
                <h2 className='Posts__title'>{car.title}</h2>
                <h3 className='Posts__name'>{car.name}</h3>
                <p className='Posts__desc'>{car.desc}</p>
                <button className='Posts__body'>{car.body}</button>

              </div>

            </article>
          )
        })
      }
    </div>
  )
}

