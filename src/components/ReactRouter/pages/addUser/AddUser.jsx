import React, { useEffect, useState } from 'react'
import "./AddUser.css"
import axios from 'axios';



export default function AddUser() {
  const [usernames, setUsernames] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernames([...usernames, event.target.usernameField.value]);
  }
  useEffect(() => {
    axios.post("../../../../db.json", usernames)
  }, [usernames])
  return (
    <div className='AddUser'>
        <form onSubmit={handleSubmit}>
          <input type="text" name='usernameField' placeholder='Type your username' 
          className='AddUser__textInput'/>
          <input type="submit" value="Save username" 
          className='AddUser__SaveUsernameButton' 
          />
        </form>
    </div>
  )
}

