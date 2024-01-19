import React from 'react'
import "./App.css"
import { useState } from 'react'
import Modal from './Modal';

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  };
  return (
    <>
    {modalIsOpen ? <Modal/> : null}
    <div>
        <button className='OpenModalButton' onClick={toggleModal}>Open modal</button>
    </div>
    </>
  )
}
