import './App.scss'
import Post from './components/Post/Post'
import Todos from './components/Todos/Todos'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import Forms from './components/Forms/Forms'
import { useState } from 'react'

function App() {
  return(
    <div className='App'>
      <Forms />
    </div>
  )
}

export default App
