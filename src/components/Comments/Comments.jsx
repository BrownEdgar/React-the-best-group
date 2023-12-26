import './Comments.scss'
import { useEffect, useState } from 'react'
import instance from '../axios/axios'
export default function Comments() {
  const [comments, setComments] = useState([])


  const deleteComments = (id) => {
    setComments(prevComments => {
      return prevComments.filter(comment => comment.id !== id)
    })
  }

  useEffect(() => {
    instance('comments?_limit=6 ')
    .then(res => setComments(res.data));
      () => {
      console.log('the end of Comments');
    }
  }, [])

  return comments.length > 0
    ? (
      <div className='Comments'>
        {comments.map(comment => {
          return <div className='Comments__card' key={comment.id}>
            <span onClick={() => deleteComments(comment.id)}>&#10006;</span>
            <div className="Comments__content">
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          </div>
        })
        }
      </div>
    )
    : (
      <div className="Comments__message">
        <h2>No Comments Available At The Moment</h2>
      </div>
    )
}