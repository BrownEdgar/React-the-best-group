import './Todos.scss'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }
    )
  )
}

export default function Todos() {
  const [todos, setTodos] = useState([])
  

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }
  
  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
        .then(res => res.json())
        .then(data => setTodos(data))
    }

    fetchData();

    () => {
      console.log('the end of Todos');
    }
  }, [])

  return todos.length > 0 
  ? (
    <div className='Todos'>
      {todos.map(todo => {
          return <div className={`Todos__card ${todo.completed} `} key={todo.id}>
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