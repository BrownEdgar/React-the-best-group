import React from 'react'
import "./Modal.css"



export default function Modal() {
   const closeModal = () => {
    const modalDiv = document.querySelector(".Modal");
    modalDiv.remove();
   }
  return (
    <div className='Modal'>
        <div className="Modal__Content">
            <span onClick={closeModal}>X</span>
            <h3>Exit</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, atque quidem pariatur voluptatum quo molestiae!</p>
        </div>
    </div>
  )
}
