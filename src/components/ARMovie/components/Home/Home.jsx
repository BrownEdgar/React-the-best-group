import { useState } from 'react'
import { PictureSlider, HomeMovies, HomeActors } from '../../pages'
import { nanoid } from 'nanoid'

export default function Home() {
  const [images] = useState([
    'https://images8.alphacoders.com/547/547394.jpg',
    'https://4kwallpapers.com/images/walls/thumbs_3t/13940.jpg',
    'https://images5.alphacoders.com/125/1257951.jpeg',
    'https://images8.alphacoders.com/131/1319119.png',
    'https://images3.alphacoders.com/131/1319517.jpeg',
    'https://images3.alphacoders.com/131/1310689.jpg',
    'https://images2.alphacoders.com/268/268352.jpg',
    'https://images4.alphacoders.com/653/653613.jpg',
    'https://images7.alphacoders.com/133/1337622.jpg'
  ])

  const [movies] = useState([
    {
      id: nanoid(6),
      title: 'Wonka',
      release: '08/12/2023',
      genre: 'Comedy, Family, Fantasy',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/otNh9bTjXWg?si=W11j2DRGiYZyYe1T',
      img: 'https://www.themoviedb.org/t/p/w1280/qhb1qOilapbapxWQn9jtRCMwXJF.jpg'
    },
    {
      id: nanoid(6),
      title: 'Poker AM',
      release: '04/10/2012',
      genre: 'Comedy',
      duration: '1h 42m',
      trailer: 'https://www.youtube.com/embed/sP4JfUY7PTg?si=xfq_PnZDx9EsjQQS',
      img: 'https://www.themoviedb.org/t/p/w1280/fleqAE4youZvRy7ALJ6TSM6RRt5.jpg'
    },
    {
      id: nanoid(6),
      title: 'Wish',
      release: '22/11/2023',
      genre: 'Animation, Family, Fantasy,',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/oyRxxpD3yNw?si=Dc4dW6fWGp8iI5fY',
      img: 'https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg'
    },
    {
      id: nanoid(6),
      title: 'Napoleon',
      release: '22/11/2023',
      genre: 'History, War, Drama',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/OAZWXUkrjPc?si=a_x-tgcVTNj16v3c',
      img: 'https://www.themoviedb.org/t/p/w1280/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg'
    },
    {
      id: nanoid(6),
      title: 'Night Swim ',
      release: '05/01/2024',
      genre: 'Horror, Thriller',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/PhlLO3Nb3sY?si=o6oMwTGI-AjfE_g4',
      img: 'https://www.themoviedb.org/t/p/w1280/gSkfBGdxdialBMM7P02V4hcI6Ij.jpg'
    },
    {
      id: nanoid(6),
      title: 'The Underdoggs',
      release: '25/01/2024 ',
      genre: 'Comedy',
      duration: '1h 05m',
      trailer: 'https://www.youtube.com/embed/MmfiqSJAou8?si=UMYAKaXBatRzHsPm',
      img: 'https://www.themoviedb.org/t/p/w1280/2r59K2VworoniG5US1CNrGgys9m.jpg'
    },
    {
      id: nanoid(6),
      title: 'Ferrari',
      release: '25/12/2023',
      genre: 'Drama, History',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/wOX91Hqlcx0?si=zY23zALbIPgzHAkw',
      img: 'https://www.themoviedb.org/t/p/w1280/LyCOcGqOTyTmaXu2TK8LfGveIb.jpg'
    },
    {
      id: nanoid(6),
      title: 'Killers of the Flower Moon',
      release: '19/10/2023',
      genre: 'Crime, History, Drama',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/EP34Yoxs3FQ?si=6IHUFhf7bakHwZdV',
      img: 'https://www.themoviedb.org/t/p/w1280/pi0kmFJAEcHpTjqITHPFUic9omf.jpg'
    },
    {
      id: nanoid(6),
      title: 'Masters of the Air',
      release: '26/01/2024',
      genre: 'War & Politics, Drama',
      duration: '1h 35m',
      trailer: 'https://www.youtube.com/embed/lA-1JCRguZ0?si=y9NfXCD7CRn0raV4',
      img: 'https://www.themoviedb.org/t/p/w1280/rSAmgcoA74371rplbqM27yVsd3y.jpg'
    },
  ])

  return (
    <div className="Home">
      <PictureSlider images={images} />
      <HomeMovies movies={movies} />
      <HomeActors />
    </div>
  )
}
