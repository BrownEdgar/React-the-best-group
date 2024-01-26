import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Home from './pages/home/Home'
import AddUser from './pages/addUser/AddUser'
import Users from './pages/users/Users'
import { Route, Routes } from 'react-router-dom'
import ROUTES from './routes'

export default function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
            <Route path={ROUTES.HOME} element={<Home/>}/>
            <Route path={ROUTES.ADD_USER} element={<AddUser/>}/>
            <Route path={ROUTES.USERS} element={<Users/>}/>
        </Routes>
    </div>
  )
}
