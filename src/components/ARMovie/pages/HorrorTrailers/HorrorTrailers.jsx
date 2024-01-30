import { useState } from 'react';
import './HorrorTrailers.scss'
import { nanoid } from 'nanoid';
export default function HorrorTrailers() {
  const [movies] = useState([
    {
      id: nanoid(6),
      title: 'Evil Dead Rise',
      trailer: 'https://www.youtube.com/embed/smTK_AeAPHs?si=aX0DjxQQMnEvCnYx'
    },
    {
      id: nanoid(6),
      title: 'The Nun II',
      trailer: 'https://www.youtube.com/embed/QF-oyCwaArU?si=x08t0TuCQbNjCznH'
    },
    {
      id: nanoid(6),
      title: 'The First Omen',
      trailer: 'https://www.youtube.com/embed/H4xk8yLiFwM?si=kF-Cs4bdygOedEW2'
    },
    {
      id: nanoid(6),
      title: 'TERRIFIER 3',
      trailer: 'https://www.youtube.com/embed/-3l2KFTj7yY?si=EGMiSwWnnV9odyMS'
    },
    {
      id: nanoid(6),
      title: 'Smile',
      trailer: 'https://www.youtube.com/embed/BcDK7lkzzsU?si=CvutSme4W4R1koIp'
    },


  ])
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const handleform = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const movie = movies.find(movie => movie.id === e.target.value)
    setSelectedMovie(movie);
  }
  return (
    <div className='HorrorTrailers'>
      <div className="HorrorTrailers__select">
        <h2>Upcoming Movies</h2>
        <form onChange={handleform} className="HorrorTrailers__Form">
          <select name="select">
            {
              movies.map(movie => {
                return (
                  <option key={movie.id} value={movie.id}>{movie.title}</option>
                )
              })
            }
          </select>
        </form>
      </div>
      <div className="HorrorTrailers__content">
        <iframe width="840" height="472.5" src={selectedMovie.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
      </div>
    </div>
  )
}