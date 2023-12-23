import './Users.scss'
import { useEffect, useState } from 'react'
export default function Users() {
  const [users, setUsers] = useState([])

  const deleteUsers = (id) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id)
    })
  }

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
        .then(res => res.json())
        .then(data => setUsers(data))
    }

    fetchData();

    () => {
      console.log('the end of Users');
    }
  }, [])

  return users.length > 0 
  ? (
    <div className='Users'>
      {users.map(user => {
          return <div className='Users__card'  key={user.id}>
            <span onClick={() => deleteUsers(user.id)}>&#10006;</span>
            <div className="Users__content">
              <h2>{user.name}</h2>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.website}</p>
            </div>
          </div>
        })
      }
    </div>
  )
  : (
    <div className="Users__message">
      <h2>No Users Available At The Moment</h2>
    </div>
  )
}





