import './App.scss'
import { Routes, Route } from 'react-router-dom'
import ROUTES from './components/ARMovie/pages/routes'
import { NavBar, Comics, Home, Contact, Footer, ErrorPage, Horror, Armenian } from './components/ARMovie/components/'
import { useState, createContext } from 'react'
import ActorPage from './components/ARMovie/components/ActorPage/ActorPage'

export const MyContext = createContext('default value')

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={
          <MyContext.Provider value={{ isOpen: isOpen, toggleModal: toggleModal }}>
            <Home />
          </MyContext.Provider>
        } />
        <Route path={ROUTES.COMICS} element={<Comics />} />
        <Route path={ROUTES.ACTORS} element={<ActorPage />} />
        <Route path={ROUTES.HORROR} element={
          <MyContext.Provider value={{ isOpen: isOpen, toggleModal: toggleModal }}>
            <Horror />
          </MyContext.Provider>
        } />
        <Route path={ROUTES.ARMENIAN} element={<Armenian />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.ERROR_PAGE} element={<ErrorPage />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
