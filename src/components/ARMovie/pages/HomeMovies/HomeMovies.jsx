import './HomeMovies.scss'
import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal/Modal'
import { MyContext } from '../../../../App'

HomeMovies.propTypes = {
  movies: PropTypes.array
}

export default function HomeMovies({ movies }) {
  const [trailerID, setTrailerID] = useState(null)

  const context = useContext(MyContext)
  const { toggleModal, isOpen } = context


  const showTrailer = (id) => {
    setTrailerID(id)
    toggleModal();
  }

  return (
    <>
      {isOpen
        ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <div className="Modal__trailer">
            <iframe width="840" height="472.5" src={trailerID} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            <button onClick={toggleModal}><i className="bi bi-x-lg"></i></button>
          </div>
        </Modal>
        : null
      }
      <div className='HomeMovies'>
        <h1>Famous Movies</h1>
        <div className="HomeMovies__movies">
          {
            movies.map(movie => {
              return (
                <div className="HomeMovies__card" key={movie.id}>
                  <div className="HomeMovies__img">
                    <img src={movie.img} alt={movie.title} />
                    <div className="buttons">
                      <i className="bi bi-film" onClick={() => showTrailer(movie.trailer)}></i>
                    </div>
                  </div>
                  <div className="HomeMovies__content">
                    <h2>{movie.title}</h2>
                    <p><span>{movie.release}</span> <span>{movie.genre}</span></p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
