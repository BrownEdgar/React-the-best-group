import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet, useHref, useMatch } from 'react-router-dom'

export default function Layouts() {
  const [count, setCount] = useState(10)

  return (
    <>
      <Navbar />
      <Outlet context={{ count }} />
    </>
  )
}
