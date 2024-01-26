import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import ROUTES from '../routes'

export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to={ROUTES.HOME}>Home</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.ADD_USER}>Add user</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.USERS}>Users</NavLink>
            </li>
        </ul>
    </nav>
  )
}
