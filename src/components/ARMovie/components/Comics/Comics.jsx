import { useState } from 'react'
import { Navigation, ComicsActors, PictureSlider } from '../../pages'
export default function Comics() {
  const [images] = useState([
    'https://4kwallpapers.com/images/wallpapers/avengers-endgame-marvel-superheroes-marvel-comics-5k-2560x1440-942.jpg',
    'https://4kwallpapers.com/images/wallpapers/thor-god-of-thunder-3840x2160-301.jpg',
    'https://images.alphacoders.com/128/1286361.jpg',
    'https://wallpapercosmos.com/w/full/b/0/f/327996-3840x2160-desktop-4k-doctor-strange-background-photo.jpg',
    'https://wallpapercave.com/wp/wp7216457.jpg',
    'https://wallpapercosmos.com/w/full/0/6/2/349383-3840x2160-desktop-4k-black-widow-wallpaper-image.jpg',
    'https://c.wallhere.com/photos/fb/8a/Iron_Man_Iron_Man_3_Robert_Downey_Jr-185252.jpg!d'
  ])



  return (
    <div className='Comics'>
      <Navigation />
      <PictureSlider images={images} />
      <ComicsActors />
    </div>
  )
}
