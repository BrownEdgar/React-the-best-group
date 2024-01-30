import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'
import ROUTES from '../../pages/routes'
import logo from './logo.png'

export default function NavBar() {
  return (
    <div className="Main">
      <nav className="NavBar">
        <div className="NavBar__logo">
          <Link to={ROUTES.HOME}>
            <img src={logo} alt="" />
            <h1>ARMovies</h1>
          </Link>
        </div>
        <div className="NavBar__menu">
          <NavLink to={ROUTES.HOME}>Home</NavLink>
          <NavLink to={ROUTES.COMICS}>Comics</NavLink>
          <NavLink to={ROUTES.HORROR}>Horror</NavLink>
          <NavLink to={ROUTES.ARMENIAN}>Armenian</NavLink>
          <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
        </div>
      </nav>
    </div>
  )
}
