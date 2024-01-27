import React, { useContext } from 'react'
import { MyContext } from './context'


export default function C() {
  console.log(MyContext)
  return (
    <div>
      <h1>Component C</h1>

    </div>
  )
}
