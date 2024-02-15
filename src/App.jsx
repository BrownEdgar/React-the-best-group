import Photos from '@/Photos/Photos'
import './App.scss'
import Pagination from '@/Pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, getCount } from './features/counter/CounterSlice';

export default function App() {
  const count = useSelector(getCount);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addCount())
  }
  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>add count</button>
      <Photos />
      <Pagination />
    </div>
  )
}
