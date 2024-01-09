import React from "react";
import "./Form.css";
import { useState } from "react";
import { nanoid } from 'nanoid';

export default function Form() {

  const [users, setUsers] = useState([{
    id: 1,
    username: "Armen"
  }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.username;
    const user = {
      id: nanoid(7),
      username: value
    }
    setUsers([...users, user])

  }
  const handleReset = () => {
    setUsers([])
  }
  const sortUsernames = () => {
    const sortedArrayOfUsernames = users.username.sort((a, b) => { return a - b })
    setUsers(sortedArrayOfUsernames)
  };

  return (
    <div className="Form">
      <h1>Users</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input type="text" placeholder="Type your username" required className="Form_textInput" name="username" />
        <input type="submit" value="Add username" className="Form_submit" />
        <input type="reset" value="Delete all users" className="Form_delete" />
      </form>
      <button className="sort" onClick={sortUsernames}>Sort usernames</button>
      <ul className="usersList">
        {
          users.map(user => {
            return (
              <li className="listItem" key={user.id}>
                {`id: ${user.id}, username: ${user.username}`}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}