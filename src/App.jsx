import { useState } from 'react';
import Posts from './components/Posts/Posts'
import './App.scss'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Pandas',
      image: 'https://images.unsplash.com/photo-1593526492327-b071f3d5333e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem sunt labore corporis sed? Libero, fuga incidunt. Officiis porro, quidem eius omnis recusandae ratione id laborum architecto animi obcaecati nemo!'
    },
    {
      id: 2,
      title: 'Mongoose',
      image: 'https://images.unsplash.com/photo-1560572765-d75742ca1cf0?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem sunt labore corporis sed? Libero, fuga incidunt. Officiis porro, quidem eius omnis recusandae ratione id laborum architecto animi obcaecati nemo!'
    }
  ])

  return (
    <div className='App'>
      <h1 className='App__title'>Our posts</h1>
      <Posts posts={posts} />
    </div>
  )
}

export default App
