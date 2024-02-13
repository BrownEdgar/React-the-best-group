import React from 'react'
import Posts from './components/Posts/Posts'
import Pagination from './components/Pagination/Pagination'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <h1>Our Posts</h1>
      <Posts />
      <Pagination />
    </div>
  )
}

