import React, { useEffect } from 'react'
import './Modal.scss'
export default function Modal({toggleModal,children}) {
useEffect(() => {
  const handleClick = (e) => {
    const {className} = e.target
    if(className === 'Modal'){
        toggleModal()
    }
  }
  window.addEventListener("click",handleClick)


  return () => {
    window.removeEventListener("click",handleClick)
  }
}, [toggleModal])

  return (
    <div className='Modal'>
        <div className="Modal__content">
            {children}
        </div>
    </div>
  )
}
