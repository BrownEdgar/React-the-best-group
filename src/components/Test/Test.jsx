import { useEffect, useReducer } from 'react'
import reducer, { initialStateValue } from './reducer'
import { ADD_USER, DELETE_USER_BY_ID, GET_USERS } from './actionTypes'
import axios from 'axios'

export default function Test() {
  const [state, dispatch] = useReducer(reducer, initialStateValue)

  useEffect(() => {

    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch({ type: GET_USERS, payload: res.data }))
  }, [])

  const deleteUser = () => {
    dispatch({ type: DELETE_USER_BY_ID, payload: 6 })
  }

  const addUser = () => {
    dispatch({ type: ADD_USER, payload: { user: "Vazgen" } })
  }

  return (
    <div>
      <pre>
        {JSON.stringify(state, null, 1)}
      </pre>
      <button onClick={deleteUser}>delete user N 6</button>
      <button onClick={addUser}>add user</button>
    </div>
  )
}
