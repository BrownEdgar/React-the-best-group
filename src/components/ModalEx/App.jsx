import { useState } from 'react'
import Modal from './Modal/Modal'

import './App.scss'

export default function App() {
  const [data, setdata] = useState(() => {
    return ['Html', "css", "Javascript", "React", "Next", "Node"]
  })
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  const handleDelete = () => {
    setdata(data.toSpliced(currentIndex, 1));
    setCurrentIndex(-1);
    toggleModal()
  }
  return (
    <>
      {isOpen ? (
        <Modal toggleModal={toggleModal} >
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, necessitatibus suscipit! Odit dolor nesciunt, tempore libero quod ab voluptatum? Accusamus iure voluptatibus dolor ea, libero repellendus odit blanditiis dolorem voluptas sapiente quasi praesentium hic voluptates deserunt vero sit ut voluptatem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam inventore, nisi enim quod illum dolorem aliquam unde quas voluptas doloribus ex. Eaque nihil voluptas doloremque? Atque dolore corporis a, modi veniam quae culpa fugiat impedit ab voluptatibus repellat magni vitae, laudantium ipsum vel aliquid iste. Adipisci corrupti repellendus voluptatibus quaerat molestiae quis deserunt laudantium debitis numquam consequatur, obcaecati impedit. Nobis, explicabo non ab ullam veritatis itaque illo inventore quibusdam.</p>
          <button onClick={toggleModal} className='cancel'>ok</button>

        </Modal>
      ) : null}
      <div className='App'>
        {data.map((elem, index) => {
          return (
            <div key={elem}>
              <h1>{elem}</h1>
              <button className="delete" onClick={() => {
                toggleModal();
                setCurrentIndex(index)
              }}>Delete</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
