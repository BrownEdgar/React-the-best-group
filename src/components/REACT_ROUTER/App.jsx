import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ROUTES from './routes'
import { Blog, Contactus, ErrorPage, Home, Photo, Photos, Shop } from './pages'


import './App.scss'
import Layouts from './components/Layouts'
import { getPhoto } from './pages/Photo'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog desc={'lorem ipsum'} />} />
        <Route path={ROUTES.SHOP} element={<Shop />} />
        <Route path={ROUTES.CONTACT_US} element={<Contactus />} />
        <Route path={ROUTES.PHOTOS} element={<Photos />} />
        <Route path={ROUTES.PHOTO} element={<Photo />} loader={getPhoto} />
        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
