import React, { useState } from 'react'
import { nanoid } from "nanoid";
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([])
  const [currentid, setCurrentid] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const isExist = users.some(user => user.username.toLowerCase() === username.value.toLowerCase())
    if (isExist) {
      alert("this username i aleredy busy");
    } else {
      const user = {
        id: nanoid(),
        username: username.value,
        password: password.value
      }
      setUsers([...users, user])
      e.target.reset()
    }
  }
  const changeId = (userId) => setCurrentid(userId)
  const deleteUse = (id) => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }
  const closeUsers = () => setUsers([])
  return (
    <div className='App'>
      <h1>Works with form in react</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' required name='username' />
        <input type='password' placeholder='password' required name='password' />
        male<input className='App__male' type='radio' name='gender' id='male' />
        female<input className='female' type='radio' name='gender' id='female' />
        <input type='submit' value='save user' />
        <div className='App__button'>
          <button className='App__sort' >sort</button>
          <button className='App__close' onClick={closeUsers}>close</button>

        </div>
      </form>
      <ul className='App__list'>
        {
          users.map(user => {
            return <li key={user.id}>
              user <span>{user.username}</span>
              password <span>{(currentid === user.id) ? (
                <>
                  {user.password}
                  <i className='bx bxs-low-vision' onClick={() => changeId(0)}></i>
                </>
              ) : (
                <>
                  {'*'.repeat(10)}
                  <i className='bx bx-show-alt' onClick={() => changeId(user.id)}></i>
                </>
              )}
              </span>
              <span className='icon'>
                <i className='bx bxs-message-square-x' onClick={() => deleteUse(user.id)}></i>
              </span>
            </li>
          })
        }
      </ul>
    </div>
  )
}
