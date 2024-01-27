import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ROUTES from './routes';

export default function ERROR_PAGE() {
  const navigate = useNavigate()
  const gohome = () => {
    navigate({ pathname: ROUTES.HOME })
  }
  return (
    <div>
      <h1><em>404 | PAGE NOT FOUND</em></h1>
      {/* <Link to={ROUTES.HOME}>GO HOME</Link> */}
      <button onClick={gohome}>GO HOME</button>
    </div>
  )
}
