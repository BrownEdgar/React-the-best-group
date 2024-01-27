import React from 'react'
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header>
      <div className='Logo'>
        <a href="#">LOGO</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contactus">ContactUs</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
