import './Movies.scss'
import { useState, useEffect } from 'react'
// import { nanoid } from 'nanoid'
import axios from 'axios';



export default function Movies() {

  const [movies, setMovies] = useState([]);

  const API_KEY = 'cb7e0d3c7220c3ae45ecd18c759bc537';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => setMovies(res.data.results))
      .catch(err => { console.log(err) })
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/572802/videos?api_key=${API_KEY}/language=en-US`)
      .then(res => console.log("VIDEO USEEFFECT", res.data))
      .catch(err => { console.log(err) })
  }, [])

  return (
    <div className="Movies">
      {
        movies.map(movie => {
          return <div className="Movies__card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
            <h2>{movie.original_title}</h2>
            <p>Release Date: {movie.release_date}</p>
          </div>
        })
      }
    </div>
  )

}