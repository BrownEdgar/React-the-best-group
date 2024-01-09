import './Navigation.scss'

export default function Navigation() {
  return (
    <nav className='Nav'>
      <a href="#">MEC</a>
      <ul className='Nav__list'>
        <li>HOME</li>
        <li>MOVIES</li>
        <li>TV-SERIES</li>
        <li>CAST</li>
        <li>ABOUT US</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}
