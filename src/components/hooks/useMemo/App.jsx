
import { useCallback, useMemo, useState } from 'react'
import HeavyConmponent from './HeavyConmponent'

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1e6)

  const changeNumber = useCallback(
    () => {
      setNumber(number - 1e4)
    }, [number])



  const memoComponent = useMemo(() => {
    return <HeavyConmponent number={number} changeNumber={changeNumber} />
  }, [number, changeNumber])

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <hr />
      {memoComponent}
    </div>
  )
}
