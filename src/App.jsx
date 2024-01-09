import './App.scss'
import Forms from './components/Forms/Forms'
import { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Actors from './components/Actors/Actors'
import Footer from './components/Footer/Footer'
import Video from './components/Video/Video'

function App() {
  return(
    <div className='App'>
      <Navigation />
      <Forms />
      <Actors />
      <Video />
      <Footer />
    </div>
  )
}

export default App
