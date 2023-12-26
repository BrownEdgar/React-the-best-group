import './Todos.scss'
import { useEffect, useState } from 'react'
import instance from '../axios/axios'

export default function Todos() {
  const [todos, setTodos] = useState([])
  

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  
  useEffect(() => {
    instance('todos?_limit=6')
    .then(res => setTodos(res.data));

    () => {
      console.log('the end of Todos');
    }
  }, [])

  return todos.length > 0 
  ? (
    <div className='Todos'>
      {todos.map(todo => {
          return <div className={`Todos__card ${todo.completed}` } key={todo.id}>
            <span onClick={() => deleteTodo(todo.id)}>&#10006;</span>
            <div className="Todos__content">
              <h2>{todo.title}</h2>
            </div>
          </div>
        })
      }
    </div>
  )
  : (
    <div className="Todos__message">
      <h2>No Tasks Available At The Moment</h2>
    </div>
  )
}