import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom'
import ROUTES from '../routes';

export default function Photo() {

  const [hasError, setHasError] = useState(false)
  const photo = useLoaderData()
  console.log(photo)
  const { id } = useParams();

  return (
    <div className='Photo'>
      {
        hasError ? (
          <>
            <h1><em>Photo by {id} was not found</em></h1>
            <Link to={'/' + ROUTES.PHOTOS}>All photos</Link>
          </>
        ) : (
          <>
            <h2>Welcome to the GALLARY N {id}</h2>
            <div>
              <img src={photo.url} alt={photo.title} />
              <h2>{photo.title}</h2>
              <Link to={'/' + ROUTES.PHOTOS}>All photos</Link>
            </div>
          </>
        )
      }
    </div>
  )
}

export const getPhoto = async ({ _, params }) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
  const data = response.data;
  return data
}