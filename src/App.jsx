import { useState } from 'react'
import './App.scss'
import Posts from './components/Posts/Posts'

function App(){

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Christmas table',
      image: 'https://images.unsplash.com/photo-1702927437246-8f7cbfce349c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'a table topped with a lit candle next to a christmas tree'
    },
    {
      id: 2,
      title: 'Christmas decoration',
      image: 'https://plus.unsplash.com/premium_photo-1669495128239-1c6ec61b92e6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'a table topped with a lit candle next to a christmas tree'
    },
    {
      id: 3,
      title: 'Christmas atmosphere',
      image: 'https://images.unsplash.com/photo-1668426840660-db80cf3a4c0d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'a table topped with a lit candle next to a christmas tree'
    }
  ])

  return(
    <div className='App'>
      <h1 className='App__title'>Christmas mood</h1>
      <Posts posts={posts}/>
    </div>
  ) 
}

export default App
