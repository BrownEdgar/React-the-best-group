import './App.scss'
import Users from './components/Users/Users'
import useRandom from './components/useRandom/useRandom'

function App() {
  const arr = useRandom({
    count: 7,
    type: "string",
    letter: "upper"
  })
  return (
    <div className='App'>
      <p>{JSON.stringify(arr)}</p>

    </div>
  )
}

export default App
