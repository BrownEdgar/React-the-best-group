import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Card from '../components/Card/Card'

export default function Blog() {

  const x = useOutletContext()
  console.log(x)
  return (
    <div>
      <h1>Blog page</h1>
    </div>
  )
}
