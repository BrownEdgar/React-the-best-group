import React from 'react'
import useRandom from './useRandom'

export default function CustomHook() {
    const array = useRandom(4, "string", "lower");
  return (
    <div>
        <h2>The array is: {array}</h2>
    </div>
  )
}
