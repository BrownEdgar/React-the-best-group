import { useState } from 'react'
import './Forms.scss'
import { nanoid } from 'nanoid'
export default function Forms() {
  const [users, setUsers] = useState([
{
  
    id: nanoid(9),
    username: 'Roberto',
    password: 'nahanjtari',
    gender: 'M' 
  },
  {
    id: nanoid(11),
    username: 'Andrea',
    password: 'hayeeerrrr',
    gender:'F' 
  }

  ]
  )

  const  [currentID, setCurrentID] = useState(0)
  
  const changeId = (userid) => setCurrentID(userid) 
  const removeUser = (id) => {
    setUsers(prevUsers =>{
      return prevUsers.filter(user => id !== user.id)
    })
  }
  const [sortOrder, setSortOrder] = useState(true);
  const sortByName = () => {
    setUsers(users.toSorted((a, b) =>
      (sortOrder)
        ? a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1
        : a.username.toLowerCase() > b.username.toLowerCase() ? -1 : 1
    ))
    
    setSortOrder((prevSortOrder) => (!prevSortOrder));
  }
  const sortByMale = () =>{
    setUsers(prevUsers =>{
      return prevUsers.filter(user => user.gender === 'M')
    })
  }
  const sortByFemale = () =>{
    setUsers(prevUsers =>{
      return prevUsers.filter(user => user.gender === 'F')
    })
  }
  const reset = () => {
    setUsers([]);
  } 
  const handleForm = (e) => {
    e.preventDefault();
    const { username, password, gender } = e.target;
    const user = {
      id: nanoid(6),
      username: username.value,
      password: password.value,
      gender: gender.value
    }
    const userExists = users.some(user => user.username.toLowerCase() === username.value.toLowerCase());
    if (userExists) {
      alert(`Username ${username.value} already Exists`)
    } else {
      const user = {
        id: nanoid(7),
        username: username.value,
        password: password.value,
        gender: gender.value
      }
      setUsers([...users, user]);
      e.target.reset()
    }
    

  }
  return (
    <div className="Forms">
      <h2>Welcome to 1970's</h2>
      <form onSubmit={handleForm} className='Forms__form'>
        <input className='Forms__username' type="text" name="username" placeholder='username' required />
        <input className='Forms__password' type="password" name="password" placeholder='password' required />

        <div className="Forms__labels">
          <label className='label' htmlFor="male"><i class="bi bi-person-standing"></i> Male
            <input type="radio" name="gender" id='male' value='M' required />
          </label>
          <label className='label' htmlFor="female"><i class="bi bi-person-standing-dress"></i> Female
            <input type="radio" name="gender" id='female' value='F'required />
          </label>
        </div>

        <input className='Forms__submit' type="submit" value="Save User" />
      </form>
      <div className='Forms__buttons'>
        <button onClick={sortByName}>Sort By Name</button>
        <button onClick={sortByMale}>Sort By Male</button>
        <button onClick={sortByFemale}>Sort By Female</button>
        <button onClick={reset}>RESET</button>
      </div>
      
      <h3>List Of Users</h3>
    {users.length > 0 
    ?
      <ul className='Forms__list'>
    {users.map(user => {
      return <li key={user.id} className='Forms__user'>
        <p>{user.username}</p>
        <p className='Forms__p'>{
          (user.id === currentID
            ?
            <>
            {user.password}
            <i onClick={() => changeId(0)} class="bi bi-eye-slash"></i>
            </>
            :
            <>
            {'*'.repeat(8)}
            <i onClick={() => changeId(user.id)} class="bi bi-eye"></i>
            </>
            )
          }</p>
        <p>
        {user.gender === 'M' ? <i class="bi bi-gender-male"></i> : <i class="bi bi-gender-female"></i>}
          {user.gender}</p>
        <span className='Forms__remove' onClick={() => removeUser(user.id)}> &#10006; </span>
      </li>
    })}
  </ul>
    :
    <h4>No Users In This Moment</h4>
    }


    </div>
  )

}

