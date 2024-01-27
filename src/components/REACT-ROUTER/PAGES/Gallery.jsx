import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function Gallery() {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 40
      }
    }).then(res => setphotos(res.data))
    .catch(console.log)
  }, [])
  
  return (
    <div>
      {photos.map(photo => {
        return(
          <article key={photo.id}>
            <h2>{photo.title}</h2>
          </article>
        )
      })}
    </div>
  )
}
