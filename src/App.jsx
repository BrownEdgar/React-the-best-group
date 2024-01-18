import './App.scss'
import useRandom from './components/useRandom/useRandom'

function App() {
  const arr1 = useRandom({
    count: 6,
    type: 'string',
    letter: 'lower'
  })

  return (
    <div className="App">
      <h1>{JSON.stringify(arr1,null,1)}</h1>
    </div>
  )
}

export default App
