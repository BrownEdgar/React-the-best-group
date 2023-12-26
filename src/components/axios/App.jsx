import { useEffect, useState } from 'react'

import instance from './axios'

import './App.scss'



export default function App() {
  const [quotes, setQuotes] = useState({})
  const [quoteId, setQuoteId] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // axios('https://dummyjson.com/quotes?limit=100')
    // axios({
    //   baseURL: 'https://dummyjson.com/',
    //   url: 'quotes',
    //   params: {
    //     limit: 40,
    //   }
    // })
    // axios.get('https://dummyjson.com/quotes?limit=10')
    // axios.all(
    //   [
    //     axios('https://dummyjson.com/quotes?limit=10'),
    //     axios('https://jsonplaceholder.typicode.com/users'),
    //     axios('https://jsonplaceholder.typicode.com/todos'),
    //     axios('https://jsonplaceholder.typicode.com/comments'),
    //   ]
    // )
    setIsLoading(true)

    instance(`quotes/${quoteId}`)
      .then(res => {
        setQuotes(res.data);
        setIsLoading(false)
      })
  }, [quoteId])

  return (
    <div className='App'>
      <div className="App__quotes">
        <button className='App__button App__button-next'
          onClick={() => setQuoteId(Math.min(100, quoteId + 1))}
          disabled={quoteId === 100}
        >
          &gt;
        </button>
        <button className='App__button App__button-prev'
          onClick={() => setQuoteId(Math.max(1, quoteId - 1))}
          disabled={quoteId === 1}>
          &lt;
        </button>
        <h2>{isLoading ? 'Please wait...' : quotes.quote}</h2>
        <p className='App__quoteid'>{isLoading ? '?' : quotes.id}</p>
        <p className='App__author'>{isLoading ? 'Loading...' : quotes.author}</p>
      </div>
    </div>
  )
}
