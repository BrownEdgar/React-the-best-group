import React from 'react'
import { useState } from 'react';
import './App.scss';





export default function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'The Bricklayer',
      year: 2024,
      country: 'Bulgaria, Greece, USA',
      genre: 'Movies, 2024 Movies, Action Movies, Thrillers',
      director: 'Rennie Harlin',
      cast: 'Aki s Sakellariou, Tim Blake Nelson, Aaron Eckhart, Ori Feffer, Lily Rich, Ilfenesh Hadera, Konstantin Adaev, Clifton Collins Jr., Oliver Trevena, Nina Dobrev',
      image: `https://globalcinema.ru/cache/images/f8595d434cca563d6f9be367d9e85c49.jpg`,
      video: `https://www.youtube.com/watch?v=3XqcSpKWUtw`
    },
    {
      id: 2,
      name: 'Avatar 2',
      year: 2022,
      country: 'USA',
      genre: 'Movies, Movies 2022, Fantasy, Action, Adventure, Science Fiction',
      kdirector: 'James Cameron',
      starring: 'Kate Winslet, Sam Worthington, David Thewlis, Zoe Saldana, Una Chaplin, Jemaine Clement, Michelle Yeoh, Giovanni Ribisi, Vin Diesel, Sigourney Weaver',
      image: `https://cdn.epicstream.com/images/ncavvykf/epicstream/6ed46a13e232c605d09de84dfd375cbb9af525fe-1366x768.jpg?auto=format`,
      video: `https://www.youtube.com/watch?v=tdBdkxwQY-Q`
    },
    {
      id: 3,
      name: 'The beekeeper',
      year: 2024,
      country: 'Great Britain, USA',
      genre: "Movies, Action Movies, Thrillers, Expected Movies",
      director: 'David Eyre',
      starring: 'Jason Statham, Josh Hutcherson, Jeremy Irons, Emmy River- Lampman, Enzo Cilenti, Taylor James, Lee Dan, Adam Basil, Reza Diako, Bobby Naderi',
      image: `https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/a5b21cdf-89b9-4571-a6cd-751c998312d6/600x900`,
      video: `https://www.youtube.com/watch?v=0axlWSgiIrA`
    },
    {
      id: 4,
      name: 'cats and mice',
      year: 2023,
      country: 'USA, France',
      genre: 'Movies, 2023 Movies, Dramas, Thrillers',
      director: 'Susanna Vogel',
      starring: 'Emilia Jones, Lisa Kashi, Geraldine Viswanathan, Isaac Powell, Christopher Shyer, Josh Andres Rivera, Nicholas Brown, Melissa Lehman, Hope Davis, Isabella Rossellini',
      image: `https://thumbs.dfs.ivi.ru/storage23/contents/2/6/b129b509e697d24a55db4f4f57b31b.jpg/858x483/?q=85`,
      video: `https://www.youtube.com/watch?v=-SdUfjC6vqk`
    },
    {
      id: 5,
      name: 'One-way road',
      year: 2023,
      country: 'Australia',
      genre: 'Movies, Crime, Thrillers, Movies 2023',
      director: 'Luke Spark',
      starring: 'Barry Pepper, Jimmy Costa, Sam Neill, Rachel Griffiths, Liam McIntyre, Zachary Garred, Alison Bond, Harley Bronwyn, Jennings Brower, Alex Fleury',
      image: `https://kinogo.film/uploads/mini/short2/7e/1702231697-1635850226-doroga-v-odin-konec.webp`,
      video: `https://www.youtube.com/watch?v=oV5ZuMrZ3qs`
    },
    {
      id: 6,
      name: 'Freelance Bodyguard',
      year: 2023,
      country: 'USA',
      genre: 'Movies, Comedies, Action Movies, Movies 2023',
      director: 'Pierre Morel',
      starring: 'Alice Eve, Alison Brie, John Cena, Christian Slater, Marton Csokas, Juan Pablo Raba, Molly McCann, Julianne Alexander, Sebastian Eslava, Roberto Cano',
      image: `https://avatars.mds.yandex.net/get-kinopoisk-image/10835644/f7294b11-78af-4ac7-aa54-efac83c1e5a6/816x459`,
      video: `https://www.youtube.com/watch?v=N3auO9tKyN0`
    },
    {
      
      id: 7,
      name: 'Family plan',
      year: 2023,
      country: 'USA',
      genre: 'action, comedy',
      director: 'Simon Cellan Jones',
      starring: 'Michelle Monahan, Mark Wahlberg, Maggie Q, Ciaran Hinds, Zoey Margaret Colletti, Jonathan Coyne, Felicia Pearson, Said Taghmaoui, Anisa Niell Johnson, Miles Doleak',
      image: `https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/df7a6e24-a7cc-47ff-af16-d0d2c3aa0a4f/220x330`,
      video: `https://www.youtube.com/watch?v=9YjAv_wmAXE`
    },
    {
      id: 8,
      name: 'Charlie is a Bullet',
      year: 2023,
      country: 'USA',
      genre: 'Action movies, Abroad movies, Movies 2023',
      director: 'Phillip Noyce',
      starring: 'Pierce Brosnan, Morena Baccarin, James Caan, Gbenga Akinnagbe, Matt Cook, David Chattam, Toby Hass, Fredrik Lene, Sharon Gless, Brennan Kil Cook',
      image: `https://www.kino-teatr.ru/movie/posters/big/6/176956.jpg`,
      video: `https://www.youtube.com/watch?v=HVljHH-RmUQ`
    },
    {
      id: 9,
      name: 'Human anger',
      year: 2021,
      country: 'United Kingdom, USA',
      genre: 'Movies, Movies 2021, Action, Thrillers',
      director: 'Guy Ritchie',
      starring: 'Las Alonso, Jason Statham, Scott Eastwood, Jeffrey Donovan, Neve Algar, Josh Hartnett, Deobia Oparey, Holt McCallany, Alex Ferns, Raul Castillo',
      image: `https://thumbs.dfs.ivi.ru/storage6/contents/8/8/84a1f2c0430452ab08f07c86eab477.jpg`,
      video: `https://www.youtube.com/watch?v=w-SOclvR5sg`
    }
    
    
  ])

  const [film, setfilm] = useState('all')
  // const film = [...movies]
  function filterFilm(id) {
  if (id === 'all'){
    movies
  } else{
      const newFilm = [...movies].filter(movie => movie.id ===id )
      console.log(newFilm)
      newFilm.map(movie =>{
        return(
          <article className='Film' key={movie.id}>
            <div className='Film___image'>
              <img src={movie.image}/>
            </div>
            <div className='Film___gener'>
              <h2>name:{movie.name}</h2>
              <h3> year:{movie.year}</h3>
              <h3> country:{movie.country}</h3>
              <h3> genre:{movie.genre}</h3>
              <h3> director:{movie.director}</h3>
              <p>starring:{movie.starring}</p>
            </div>
            <div className='Film___video'>
              {movie.video}
            </div>
            
    
          </article>
        )
        
      })
    }
    
  }

  return (
    <div className='Movies'>
      {
        movies.map(movie => {
          return (
            <article className='Movies__cart' key={movie.id}>
              <div>
                <img src={movie.image} />
                <h2 onClick={() => filterFilm(movie.id)}>{movie.name} </h2>
                <h3>{movie.year}</h3>
              </div>

            </article>
          )
        })
      }

    </div>
  )
}
