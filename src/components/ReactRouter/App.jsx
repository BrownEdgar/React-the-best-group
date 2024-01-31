import React from 'react'
import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ROUTES from './routes'
import Layouts from './components/Layouts'
import { Home, AddUser, Users } from './pages'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.HOME} element={<Layouts/>}>
        <Route index element={<Home/>}/>
        <Route path={ROUTES.ADD_USER} element={<AddUser/>}/>
        <Route path={ROUTES.USERS} element={<Users/>}/>
      </Route>
    )
  )
  return (
    <div className='App'>
        <RouterProvider router={router}/>
    </div>
  )
}

