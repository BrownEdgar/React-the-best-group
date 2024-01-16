import React from 'react'
import useCount from './useCount'
import useFetchData from './useFetchData'

export default function App() {

  const [data, loading, error] = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/todos'
  })

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>ERROR:{error.message}</h1>
  }
  return (
    <div>
      {
        data?.map(todo => {
          return (
            <h1 key={todo.id}>{todo.title}</h1>
          )
        })
      }
    </div>
  )
}
