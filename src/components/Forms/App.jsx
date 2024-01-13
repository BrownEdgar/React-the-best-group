import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import './App.scss'

export default function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Margarita',
      password: "loremIpsum43"
    },
    {
      id: 2,
      username: 'Valita',
      password: "loremIpsum43"
    },
    {
      id: 3,
      username: 'Konchita',
      password: "loremIpsum43"
    },
    {
      id: 4,
      username: 'Bonita',
      password: "loremIpsum43"
    },
  ])

  const [currentId, setCurrentId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = e.target


    const isExist = users.some(user => user.username.toLowerCase() === username.value.toLowerCase());
    if (isExist) {
      alert("this username is alredy zbaxvac");
    } else {
      const user = {
        id: nanoid(6),
        username: username.value,
        password: password.value,
      }
      setUsers([...users, user])
      e.target.reset()
    }
  }

  const changeId = (userId) => setCurrentId(userId);

  return (
    <div className='App'>
      <h1>Works with form in react</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' required name='username' />
        <input type="password" placeholder='password' required name='password' />

        male<input type="radio" name="gender" id="male" />
        female<input type="radio" name="gender" id="female" />
        <input type="submit" value="save user" />
      </form>

      <ul className='App__list'>
        {
          users.map(user => {
            return <li key={user.id}>
              user <span>{user.username}</span>
              password<span>
                {(currentId === user.id) ? (
                  <>
                    {user.password}
                    <i className='bx bx-low-vision' onClick={() => changeId(0)}></i>
                  </>
                ) : (
                  <>
                    {"*".repeat(10)}
                    <i className='bx bx-show' onClick={() => changeId(user.id)}></i>
                  </>
                )}

              </span>
              <span className='icon'>
                <i className='bx bxs-message-square-x'></i>
              </span>
            </li>
          })
        }
      </ul>
    </div>
  )
}


