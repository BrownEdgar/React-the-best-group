import './Forms.scss'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Forms() {
  const [movies] = useState([
    {
      id: nanoid(7),
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      genre: 'Adventure, Fantasy, Action',
      date: '19/12/2001',
      director: 'Peter Jackson',
      duration: '2h 59m',
      overview: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Lord of the Rings: The Two Towers ',
      genre: 'Adventure, Fantasy, Action',
      date: '18/12/2002 ',
      director: 'Peter Jackson',
      duration: '2h 59m',
      overview: 'Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Lord of the Rings: The Return of the Ring',
      genre: 'Adventure, Fantasy, Action',
      date: '17/12/2003',
      director: 'Peter Jackson',
      duration: '3h 21m',
      overview: 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Saurons forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lords realm.',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Hobbit: An Unexpected Journey',
      genre: 'Adventure, Fantasy, Action',
      date: '19/12/2012',
      director: 'Peter Jackson',
      duration: '2h 49m',
      overview: 'Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Hobbit: The Desolation of Smaug',
      genre: 'Adventure, Fantasy, Action',
      date: '13/12/2013',
      director: 'Peter Jackson',
      duration: '2h 41m',
      overview: 'The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.',
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/toHBMjKK8rg9AL3MBfE1ZglPGOt.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Hobbit: The Battle of the Five Armies',
      genre: 'Adventure, Fantasy, Action',
      date: '11/12/2014',
      director: 'Peter Jackson',
      duration: '2h 24m',
      overview: "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xT98tLqatZPQApyRmlPL12LtiWp.jpg'
    },
    {
      id: nanoid(7),
      title: 'The Lord of the Rings: The Rings of Power',
      genre: 'Action & Adventure, Sci-Fi & Fantasy, Drama',
      date: '31/08/2022',
      director: 'J.A. Bayona',
      duration: '59m',
      overview: "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
      img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/toEUQXyDut4QecjC3RAdBoDVlUe.jpg'
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleForm = (e) => {
    e.preventDefault();
    const movie = movies.find(movie => movie.id === e.target.value)
    setSelectedMovie(movie);
  }

  return (
    <div className="Forms">
      <form onChange={handleForm} className='Forms__form'>

        <label htmlFor="movies">Choose a movie:</label>

        <select id="movies">
          {
            Array(movies.length)
              .fill()
              .map((_, index) => {
                return <option
                  value={movies[index].id}
                  key={movies[index].id}
                >
                  {movies[index].title}
                </option>
              })
          }
        </select>

      </form>
      <section className='Forms__movie'>
        <div className="Forms__img">
          <img src={selectedMovie.img} alt={selectedMovie.title} />
        </div>
        <div className="Forms__content">
          <h2>{selectedMovie.title}</h2>
          <p className='info'>
            <span>{selectedMovie.date}</span> •
            <span>{selectedMovie.genre}</span> •
            <span>{selectedMovie.duration}</span>
          </p>
          <div className="Forms__buttons">
            <i className="bi bi-heart"></i>
            <i className="bi bi-star"></i>
            <i className="bi bi-bookmark"></i>
          </div>
          <h3>Overview</h3>
          <p className='overview'>{selectedMovie.overview}</p>
          <h4>Director: {selectedMovie.director}</h4>
        </div>

      </section>

    </div>
  )
}
