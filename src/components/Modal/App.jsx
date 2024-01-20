import  { useState } from 'react'
import  "./App.scss";
import Modal from './Modal';

export default function App() {

  const [data, setData] = useState()
  const toggleModal = ()=>{
    setData(!data)
  }
  return (
    <>
      {data ? <Modal toggleModal={toggleModal} /> : null}
    
    <div className='App'>
      <button className='delete' onClick={toggleModal}>Open modal </button>
    </div>
    </>
  )
}
