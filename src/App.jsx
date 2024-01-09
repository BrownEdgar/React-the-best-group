import './App.scss'
import Forms from './components/Forms/Forms'
import Navigation from './components/Navigation/Navigation'
import Locations from './components/Locations/Locations'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Forms />
      <Locations />
      <Footer />
    </div>
  )
}

export default App
