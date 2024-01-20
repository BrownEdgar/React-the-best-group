import React from 'react'
import { useState } from 'react';
import './App.scss';


export default function App() {
  const [barev, setBarev] = useState(['barev','hello',"hola"])
  const [count, setCount] = useState(0)
  const handelClick =()=>{
    setCount(count < barev.length -1 ? count +1:0)
  }

  return(
  <div className='App'>
    <h1>
      <span>{barev[count]}</span>
      Sebastian
    </h1>
      <button onClick={handelClick}> click</button>

  </div>
  )
}