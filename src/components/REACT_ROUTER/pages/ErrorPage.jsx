import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes'
export default function ErrorPage() {
  const navigate = useNavigate()
  const gohome = () => {
    navigate({ pathname: ROUTES.HOME })
  }
  return (
    <div>
      <h1> <em> 404 | Page not Found</em></h1>
      <Link to={ROUTES.HOME}>go home</Link>
      <button onClick={gohome}>go back</button>
    </div>
  )
}
