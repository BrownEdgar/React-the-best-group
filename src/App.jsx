import './App.scss'
import Post from './components/Post/Post'
import Todos from './components/Todos/Todos'
import Users from './components/Users/Users'
import Comments from './components/Comments/Comments'

function App() {
  
  return (
    <div className='App'>
      <h1>Our Products</h1>
    
      <Post />
      <h2>Todo List</h2>
      <Todos /> 
      <h2>Our Users</h2>
      <Users />
      <h2>Here's Comments</h2>
      <Comments />
    </div>
  )
}

export default App
