import React, { useEffect, useState } from 'react'
import Child from './Child'

export default function App() {
  const [count, setCount] = useState(1)


  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>add</button>
      <Child count={count} />

    </div>
  )
}


