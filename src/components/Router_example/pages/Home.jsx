import axios from 'axios';
import { useState, useEffect, useTransition } from 'react';
import Comment from '@/Router_example/components/Comment/Comment';





export default function Home() {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState('')
  const [loading, startTransition] = useTransition();
  const [timeOutId, setTimeOutId] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(res => setComments(res.data))
  }, [])

  const handleSearch = (e) => {
    if (timeOutId) {
      clearTimeout(timeOutId)
    }
    const id = setTimeout(() => {
      console.log('handleSearch')
      startTransition(() => setValue(() => e.target.value))
    }, 300)
    setTimeOutId(id)
  }

  const filteredComments = comments.filter(comment => comment.name.includes(value.trim()))

  return (
    <div>
      <h1>Use Transition</h1>
      <form>
        <input type="text" onChange={handleSearch} />
      </form>
      <div className="comments">
        {
          loading
            ? <h2>Loading...</h2>
            : (
              <>
                {filteredComments.map(comment => <Comment comment={comment} key={comment.id} />)}
              </>
            )
        }
      </div>



    </div>
  )
}
