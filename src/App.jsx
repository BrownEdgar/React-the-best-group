import { useState } from 'react'
import './App.scss'
import Navigation from './components/Navigation/Navigation';
import Characters from './components/Characters/Characters';
import Slider from './components/Slider/Slider';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navigation />
      <Slider />
      <div className="App">
        <Characters toggleModal={toggleModal} isOpen={isOpen} />
      </div>
    </>
  )
}

export default App
