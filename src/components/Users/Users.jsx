import './Users.scss'
import { useEffect, useState } from 'react'
import instance from '../axios/axios';

export default function Users() {

  const [users, setUsers] = useState([])

  const deleteUser = (id) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id)
    })
  }

  useEffect(() => {
    instance('users?_limit=4')
      .then(res => setUsers(res.data))

    return () => {
      console.log('end of Users');
    }
  }, [])


  return users.length > 0
    ? (
      <>
        <div className='Users'>
        {/* <h2>Our Users</h2> */}
          {
            users.map(user => {
              return (
                <div className="Users__card" key={user.id}>
                  <span onClick={() => deleteUser(user.id)}>&#10006;</span>
                  <div className="Users__content">
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}</p>

                  </div>
                </div>
              )
            })
          }
        </div>
      </>

    )
    : (
      <div className="Users__message">
        <h2>No Users Available At The Moment</h2>
      </div>
    )

}

