import React from 'react'
import "./Navbar.scss";
import { Link, NavLink } from 'react-router-dom';
import ROUTES from './../../PAGES/routes';

export default function Navbar() {
  return (
    <header>
      <div className='Logo'>
        <a to="#">LOGO</a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.SHOP}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.GALLERY}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT_US}>ContactUs</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
