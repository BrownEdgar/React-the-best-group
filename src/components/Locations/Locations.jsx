import './Locations.scss'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Locations() {
  console.log('Locations')
  const [locations] = useState([
    {
      id: nanoid(6),
      title: 'The Shire',
      people: 'Hobbits',
      img: 'https://wallpapercosmos.com/w/full/e/2/f/567032-1920x1080-desktop-1080p-the-shire-the-lord-of-the-rings-background.jpg'
    },
    {
      id: nanoid(6),
      title: 'Minas Tirith',
      people: 'Men of Gondor',
      img: 'https://www.usatoday.com/gcdn/-mm-/476396c0c5cf0604e6063c24ff41e563a138194b/c=250-0-1670-799/local/-/media/2016/01/21/USATODAY/usatsports/xxx-lotr-dvd-blu-ray-5423.jpg?width=1420&height=799&fit=crop&format=pjpg&auto=webp'
    },
    {
      id: nanoid(6),
      title: 'Rivendell',
      people: 'Ñoldor',
      img: 'https://images5.alphacoders.com/614/614690.jpg'
    },
    {
      id: nanoid(6),
      title: 'Erebor',
      people: 'Dwarves',
      img: 'https://qph.cf2.quoracdn.net/main-qimg-c872cb7ad7988845762bb4f87eba55a6-lq'
    },
    {
      id: nanoid(6),
      title: 'Edoras',
      people: 'Rohirrim',
      img: 'https://resources.stuff.co.nz/content/dam/images/1/h/f/u/k/1/image.related.StuffLandscapeSixteenByNine.710x400.1hfu7v.png/1603155930917.jpg?format=pjpg&optimize=medium'
    },
    {
      id: nanoid(6),
      title: 'Mordor',
      people: 'Orcs',
      img: 'https://i.redd.it/y8djh27y98ba1.png'
    },

  ])

  return (
    <div className="Locations">
      <h2>Top Locations</h2>
      {
        locations.map(location => {
          return (
            <div className="Locations__card" key={location.id}>
              <div className="Locations__img">
                <img src={location.img} alt={location.title} />
              </div>
              <div className="Locations__content">
                <h3>{location.title}</h3>
                <p>Inhabitats: {location.people}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )

}


