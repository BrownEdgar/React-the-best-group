import React, { useState, useEffect } from 'react'
import "./Users.css"
import axios from 'axios';

export default function Users() {
 const [usersFromInput, setUsersFromInput] = useState([]);
 useEffect(() => {
   axios.get("../../../../db.json")
   .then(res => setUsersFromInput(res.data))
   .catch((err) => {
      console.log(err.message);
    })
 }, [])
  return (
    <div>
      {usersFromInput.map(user => { return(
        <h3 key={user}>username: {user}</h3>
        )})
      }
    </div>
  )
}
