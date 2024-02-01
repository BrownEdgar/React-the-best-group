import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useHref } from 'react-router-dom'
import { Blog, Home } from './pages'
import ROUTES from './routes'
import Layouts from './components/Layouts'


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={'*'} element={<Home />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
