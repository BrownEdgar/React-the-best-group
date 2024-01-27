import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './PAGES/routes';
import { Blog, ConactUs, Gallery, Home, Shop } from './PAGES';
import ERROR_PAGE from './PAGES/ERROR_PAGE';
import './App.scss'

export default function () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />}/>
        <Route path={ROUTES.SHOP} element={<Shop />}/>
        <Route path={ROUTES.CONTACT_US} element={<ConactUs />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.ERROR_PAGE} element={<ERROR_PAGE />} />
      </Routes>
      
    </div>
  )
}
