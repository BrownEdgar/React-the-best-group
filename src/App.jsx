import { useState } from 'react'
import './App.scss'
import Modal from './components/Modal/Modal'
import Navigation from './components/Navigation/Navigation'
import Horror from './components/Horror/Horror';
import Audio from './components/Audio/Audio';
import Video from './components/Video/Video';
import Room from './components/Room/Room';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='App'>
      <Navigation />
      <Audio />
      <Horror toggleModal={toggleModal} isOpen={isOpen} />
      <Room />
      <Video />
    </div>
  )
}

export default App
