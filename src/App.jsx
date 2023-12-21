import Users from './components/Users/Users'

import './App.scss'
import Post from './components/Post/Post'
import { useState } from 'react'

function App() {
  const [posts,setPosts] = useState([
    {
      id: 1,
      title: 'Little Bonsai',
      img: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 79
    },
    {
      id: 2,
      title: 'Aloe',
      img: 'https://w0.peakpx.com/wallpaper/995/22/HD-wallpaper-aloe-plant-home-plant-black.jpg',
      price: 125,
    },
    {
      id: 3,
      title: 'Tropical Leaf',
      img: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 35
    }
  ])


  return (
    <div className='App'>
      <h1>Our Products</h1>
      <Post posts={posts} />
    </div>
  )
}

export default App
