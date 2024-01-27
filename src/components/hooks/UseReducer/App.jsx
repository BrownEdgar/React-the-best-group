import { useReducer } from 'react'
import reducer, { initialStateValue } from './reducer'
import axios from 'axios'
import { ADD_ELEM, SAVE_POSTS, TOGGLE_LOADING } from './actionTypes'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue)

  const plus = () => {
    dispatch({ type: ADD_ELEM })
  }
  const getPosts = () => {
    dispatch({ type: TOGGLE_LOADING })
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        userId: 7
      }
    })
      .then(res => dispatch({ type: SAVE_POSTS, payload: res.data }))
      .finally(() => dispatch({ type: TOGGLE_LOADING }))


  }
  return (
    <div>
      {
        state.isloading ? <h1>Loading...</h1> : (
          <pre>
            {JSON.stringify(state.data, null, 1)}
          </pre>
        )
      }
      <button onClick={plus}>plus</button>
      <button onClick={getPosts}>get posts</button>
    </div>
  )
}
