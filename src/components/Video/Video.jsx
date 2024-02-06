import { useState } from 'react';
import './Video.scss'
import { nanoid } from 'nanoid';
export default function Video() {
    const [movies, setMovies] = useState([
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
        <div className='HomeActors'>
            <div className="HomeActors__select">
                <h2>Upcoming Movies</h2>
                <form onChange={handleform} className="HomeActors__Form">
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
            <div className="HomeActors__content">
             <h2>{selectedMovie.title}</h2>
             <iframe width="840" height="472.5" src={selectedMovie.trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
        </div>
    )
}

