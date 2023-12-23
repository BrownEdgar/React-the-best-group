import './App.scss'
import Posts from './components/Posts/Posts'
import Todos from './components/Todos/Todos'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'

function App() {
  return (
    <div className='App'>
      <h2>Our Posts</h2>
      <Posts />
      <h2>To Do List</h2>
      <Todos />
      <h2>Comments Section</h2>
      <Comments />
      <h2>Our Users</h2>
      <Users />
    </div>
  )
}

export default App
