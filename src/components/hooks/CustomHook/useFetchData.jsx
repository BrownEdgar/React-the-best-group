import axios from 'axios';
import { useEffect, useState } from 'react'

export default function useFetchData({ url }) {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios(url)
      .then(res => setdata(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return [data, loading, error]
}
