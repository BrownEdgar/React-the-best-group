import './Users.scss'
import instance from '../axios/axios'
import { useEffect, useState } from 'react'

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    instance('users?_limit=9')
      .then(res => setUsers(res.data))

    return () => {
      console.log('the end');
    }
  }, [])

  const deleteUser = (id) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id)
    })
  }

  const [clicked, setClicked] = useState(null);


  const handleClick = (id) => {
    if (clicked === id) {
      setClicked(null);
    } else {
      setClicked(id);
    }
  }



  return (
    <div className="Users">
      <h1>User List</h1>
      {
        users.map(user => {
          return (
            <div className={`Users__card ${user.id === clicked ? 'active' : ''}`}
              key={user.id}
              onClick={() => handleClick(user.id)}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <button
                disabled={user.id === clicked ? false : true}
                className={`${user.id !== clicked ? 'disabled' : 'active'}`}
                onClick={() => deleteUser(user.id)}>
                Delete User
              </button>
            </div>
          )
        })
      }
    </div>
  )

}