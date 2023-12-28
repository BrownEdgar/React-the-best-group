import './Forms.scss'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Forms() {
  const [users, setUsers] = useState([
    {
      id: nanoid(7),
      username: 'Ashot',
      password: 'Ronaldo777',
      gender: 'M'
    },
    {
      id: nanoid(7),
      username: 'Siranush',
      password: 'Eranosyan1964',
      gender: 'F'
    },
    {
      id: nanoid(7),
      username: 'Eghiazar',
      password: 'qwerty123',
      gender: 'M'
    }
  ]);


  // Show Password Function
  const [currentID, setCurrentID] = useState(0);
  const changeID = (userID) => setCurrentID(userID);

  // Sort from A-Z to Z-A
  const [sortOrder, setSortOrder] = useState(true);
  const sortByName = () => {
    setUsers(users.toSorted((a, b) =>
      (sortOrder)
        ? a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1
        : a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1
    ))

    setSortOrder((prevSortOrder) => (!prevSortOrder));
  }

  // Sort Gender for one Button

  // const [sortGender, setSortGender] = useState(true);
  // const sortByGender = () => {
  //   setUsers(prevUsers => {
  //    return prevUsers.filter(user => {
  //      if (sortGender)
  //       return user.gender === "M"
  //       else user.gender === "F"
  //     })
  //   })
  //   setSortGender((prevSortGender) => (!prevSortGender))
  // }


  // Sort Gender for two Buttons
  const sortMale = () => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.gender === 'M')
    })
  }

  const sortFemale = () => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.gender === 'F')
    })
  }

  // Delete User Function
  const deleteUser = (id) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id)
    })
  }

  // Reset Users
  const resetUsers = () => {
    setUsers([]);
  }

  const handleForm = (e) => {
    e.preventDefault();
    const { username, password, gender } = e.target;

    const userExists = users.some(user => user.username.toLowerCase() === username.value.toLowerCase());

    if (userExists) {
      alert(`Username ${username.value} is already taken`)
    } else {
      const user = {
        id: nanoid(7),
        username: username.value,
        password: password.value,
        gender: gender.value
      }

      setUsers([...users, user]);

      e.target.reset();
    }
  }


  return (
    <div className="Forms">
      <h2>Create New User</h2>
      <form onSubmit={handleForm} className='Forms__form'>
        <input type="text" name="username" placeholder='Username' required />
        <input type="password" name="password" placeholder='Password' required />

        <div className="Forms__labels">
          <label htmlFor="male">Male
            <input type="radio" name="gender" id='male' value='M' required />
          </label>
          <label htmlFor="female">Female
            <input type="radio" name="gender" id='female' value='F' required />
          </label>
        </div>

        <input type="submit" value="Save User" />
      </form>

      <div className="Forms__buttons">
        <button className='button-56' onClick={sortByName}>Sort By Name</button>
        <button className='button-56' onClick={sortMale}>Sort By Male</button>
        <button className='button-56' onClick={sortFemale}>Sort By Female</button>
        <button className='button-56' onClick={resetUsers}>Reset List</button>
      </div>

      <h2>List of Users</h2>
      {users.length > 0
        ? <ul className='Forms__list'>
          {users.map(user => {
            return <li key={user.id} className='Forms__user'>
              <p className='username'>{user.username}</p>
              <p className='password'>
                {(user.id === currentID
                  ? <>
                    {user.password}
                    <i className="bi bi-eye-slash-fill" onClick={() => changeID(0)}></i>
                  </>
                  : <>
                    {'•'.repeat(8)}
                    <i className="bi bi-eye-fill" onClick={() => changeID(user.id)}></i>
                  </>
                )}
              </p>
              <p className={`gender ${user.gender === 'M' ? 'gender-male' : 'gender-female'}`}><i class="bi bi-gender-ambiguous"></i> {user.gender}</p>
              <span className='Forms__delete' onClick={() => deleteUser(user.id)}> <i class="bi bi-x-lg"></i> </span>
            </li>
          })}
        </ul>
        : <h3>No Users Available</h3>
      }
    </div>
  )
}
