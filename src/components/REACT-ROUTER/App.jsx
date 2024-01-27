import React from 'react'
import Home from './PAGES/Home'
import Blog from './PAGES/Blog'
import Shop from './PAGES/Shop'
import ConactUs from './PAGES/ConactUs'
import Navbar from './components/Navbar/Navbar'

export default function () {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Blog />
      <Shop />
      <ConactUs />
    </div>
  )
}
