import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fugiat libero, repellat, facilis explicabo sunt rerum nulla ipsum dolorem animi impedit doloribus! Culpa, minima, ipsa porro nihil blanditiis eos ea minus odio, illum non rerum exercitationem ad veritatis inventore nisi.</p>
      </footer>
    </>
  )
}
