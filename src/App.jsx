import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import Users from './components/Users/Users'
import { myFloatAction } from './features/counter/counterSlice'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>COUNTER  {counter}</h1>
      <button onClick={() => {
        dispatch(myFloatAction(5))
      }}
      >
        myFloatAction
      </button>
      <Users />
    </div>
  )
}

export default App
