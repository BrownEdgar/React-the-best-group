import { useState } from 'react'
import Users from './Users'
import classNames from 'classnames'

import './App.scss'


function filteredData(users, gender) {
  if (gender === "all") return users;
  return users.filter(user => user.gender === gender)
}

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Roberto",
      gender: 'male'
    },
    {
      id: 2,
      name: "Syuzi",
      gender: 'female'
    },
    {
      id: 3,
      name: "Alberto",
      gender: 'male'
    },
    {
      id: 4,
      name: "Frank",
      gender: 'male'
    },
    {
      id: 5,
      name: "Vaspur",
      gender: 'male'
    },
    {
      id: 6,
      name: "Adelina",
      gender: 'female'
    },
    {
      id: 7,
      name: "Antuaneta",
      gender: 'female'
    },
  ])
  const [genderOption, setgenderOption] = useState('all');
  const [sortCount, setsortCount] = useState(0)

  const handleChange = (gender) => setgenderOption(gender);

  const handleSort = () => {
    setsortCount(sortCount === 2 ? 0 : sortCount + 1)
    const o = {
      0: function () {
        return users.toSorted((a, b) => a.id - b.id);
      },
      1: function () {
        return users.toSorted((a, b) => a.name.localeCompare(b.name))
      },
      2: function () {
        return users.toSorted((a, b) => b.name.localeCompare(a.name))
      }
    }
    const sortedusers = o[sortCount]()
    setUsers(sortedusers)
  }



  return (
    <div className='App'>
      <h1>sortCount:{sortCount}</h1>
      <div className="buttons">
        <button onClick={() => handleSort()}>
          sort
          <i className='bx bx-sort-a-z'></i>
        </button>
        <button
          onClick={() => handleChange(genderOption === "male" ? "all" : 'male')}
          className={classNames({
            active: genderOption === "male",
            disabled: genderOption !== "male"
          })}
        >
          M
        </button>
        <button
          onClick={() => handleChange(genderOption === "female" ? "all" : 'female')}
          className={classNames({
            active: genderOption === "female"
          })}
        >
          F
        </button>
      </div>
      <Users list={filteredData(users, genderOption)} />

    </div>
  )
}


