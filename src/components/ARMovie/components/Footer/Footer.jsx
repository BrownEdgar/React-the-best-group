import { useState } from 'react'
import logo from '../NavBar/logo.png'
import './Footer.scss'

export default function Footer() {
  const [footerPages] = useState([
    'System Pages',
    'Terms of Service',
    'Privacy Policy',
    'Partnership'
  ])
  return (
    <footer>
      <div className="Footer">
        <div className="Footer__left">
          <img src={logo} alt="" />
          <p>Discover a world of entertainment with ARMovies. Stream your favorite movies, TV shows, and more,
            anytime, anywhere. Join us for the ultimate cinematic experience. Lights, camera, action!</p>
        </div>
        <div className="Footer__center">
          <ul>
            {
              footerPages.map((page, index) => {
                return <li key={index} className={index === 0 ? 'header' : ''}>{page}</li>
              })
            }
          </ul>
        </div>
        <div className="Footer__right">
          <ul>
            <li className='header'>Contact Us</li>
            <li><a href="mailto: info@armovies.am">info@armovies.am</a></li>
            <li><a href="mailto: support@armovies.am">support@armovies.am</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href=""></a></li>
          </ul>
          <div className="social">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}
