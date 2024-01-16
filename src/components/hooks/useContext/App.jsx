import React, { useState, createContext } from 'react'
import A from './A'
import { MyContext } from './context'



export default function App() {
  const [data, setdata] = useState("hello world")
  const changeData = () => {
    setdata('բարև աշխարհ')
  }
  return (
    <div>
      <h1>MAin App component</h1>
      <MyContext.Provider value={{ data }}>
        <A />
      </MyContext.Provider>

      <button onClick={changeData}>change</button>
    </div>
  )
}
