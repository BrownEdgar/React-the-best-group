import React, { useEffect } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import Card from '../components/Card/Card'

export default function Blog() {

  const x = useOutletContext()
  console.log(x)
  const navigate = useNavigate()


  return (
    <div>
      <h1>Blog page</h1>
      <Link to={'/'} state={{ value: 8 }}>go home</Link>
    </div>
  )
}
