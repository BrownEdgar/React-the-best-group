import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../routes';

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 40
      }
    }).then(res => setPhotos(res.data))
      .catch(console.log)
  }, [])

  return (
    <div>
      {photos.map(photo => {
        return (
          <Link key={photo.id} className='Photos' to={`/${ROUTES.PHOTOS}/${photo.id}`}>
            {photo.title}
          </Link>
        )
      })}
    </div>
  )
}
