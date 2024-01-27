import React from 'react'

import './Card.scss'

export default function Card({ image, title, author, bid }) {
  return (
    <div className='Card'>
      <img src={`./images/${image}`} alt={title} />
      <div className="Card__Content">
        <h2>{title}</h2>
        <div className="Card__flex">
          <p>
            <span className='Card__icon'></span>
            {author}
          </p>
          <p>
            <span>Current Bid</span>
            <span className="bid">{bid}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
