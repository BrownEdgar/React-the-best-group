import { useState } from 'react'
import Posts from './components/Posts/Posts'
import './App.scss'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Panda",
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod minima vel sequi nobis natus cumque culpa! Molestias illo placeat explicabo sunt porro quam? Totam adipisci maxime accusamus enim quo!",
    },
    {
      id: 2,
      title: "Mongoose",
      image: 'https://plus.unsplash.com/premium_photo-1661932997437-1210bd678c51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quod minima vel sequi nobis natus cumque culpa! Molestias illo placeat explicabo sunt porro quam? Totam adipisci maxime accusamus enim quo!",
    }
  ])

  return (
    <div className='App'>
      <h1 className='App__title'>Our Posts</h1>
      <div className='App__content'></div>
      <Posts posts={posts} />
    </div>
  )
}

export default App
