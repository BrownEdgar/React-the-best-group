import { useState } from 'react'
import { ArmenianActors, ArmenianSeries, Slider } from '../../pages'
import './Armenian.scss'
export default function Armenian() {
  const [images] = useState([
    'https://cdn.kinodaran.com/MEDIA/3/MOVIE/413/thumbnail_DETAIL_TABLET.jpg?etag=cc5c61fffd68e8e4e727b134a48dd8f1_sPTCaY4XWq_1640722623774',
    'https://images.entertainment.ie/media/original_rBWiE0Szh6L7lewCXJXxXmnmnjn.jpg?w=1280&h=768&q=high',
    'https://m.media-amazon.com/images/M/MV5BZGUyM2FiMmEtYmU4Ny00MDhhLTkzNjUtMTIzMGFlZGJhOTRlXkEyXkFqcGdeQXVyNzIwMDA5NDQ@._V1_.jpg',
    'https://i.ytimg.com/vi/_Zr5Z4zeRjY/maxresdefault.jpg',
    'https://i.ytimg.com/vi/VttQTOz77Yc/maxresdefault.jpg',
    'https://cdn.kinodaran.com/MEDIA/1/MOVIE/7/thumbnail_DETAIL_TABLET.jpg?etag=03e563f35c34de0ec2d38b0bdfbecb75_EMI84dW0E3_1682963060086',
    'https://i.ytimg.com/vi/aC4kHabOb7s/maxresdefault.jpg'
  ]);


  return (
    <div className='Armenian'>
      <Slider images={images} />
      <ArmenianSeries />
      <ArmenianActors />
    </div>
  )
}
