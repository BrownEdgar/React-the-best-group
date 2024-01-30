import React from 'react'
import ROUTES from '../../routes'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.scss'

const setActiveClass = ({ isActive }) => isActive ? "active__link" : ''

export default function Navbar() {
  console.log("navbar render")
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={setActiveClass} to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} to={ROUTES.BLOG}>Blog</NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} to={ROUTES.SHOP}>Shop</NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} to={ROUTES.PHOTOS}>Photos</NavLink>
          </li>
          <li>
            <NavLink className={setActiveClass} to={ROUTES.CONTACT_US}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
