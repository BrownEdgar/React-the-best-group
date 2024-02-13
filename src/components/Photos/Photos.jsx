import { getAllPhotos, getAsyncPhotos, getLimitedPhotos } from '../../features/photos/photosSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Photos.scss'

export default function Photos() {

  const photos = useSelector(getLimitedPhotos);
  console.log(photos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncPhotos())
  }, [])

  return (
    <div className='Photos'>
      {
        photos.map(elem => {
          return (
            <article className='Photos__item' key={elem.id}>
              <img src={elem.thumbnailUrl} draggable={false} />
              <h2>{elem.title}</h2>
            </article>
          )
        })
      }

    </div>
  )
}
