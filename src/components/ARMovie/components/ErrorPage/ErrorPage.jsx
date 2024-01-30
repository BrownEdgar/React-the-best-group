import './ErrorPage.scss'
import logo from '../NavBar/logo.png'
import { Link } from 'react-router-dom'
import ROUTES from '../../pages/routes'


export default function ErrorPage() {
  return (
    <div className='ErrorPage'>
      <h1>ERROR 404</h1>
      <h2>Page Not Found</h2>
      <Link to={ROUTES.HOME}>Back To Home</Link>
    </div>
  )
}
