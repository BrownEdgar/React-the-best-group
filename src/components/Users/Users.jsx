import { nanoid } from '@reduxjs/toolkit';
import "./Users.scss"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, deleteUsers } from '../../Feautures/Users/UsersSlice';
export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username } = e.target;
        const user = {
            id: nanoid(5),
            name: username.value
        }
        dispatch(addUsers(user));
        e.target.reset();
    }
    return (
        <div className='Users'>
            <form onSubmit={handleSubmit} className='Users__Form'>
                <input type="text" name="username" placeholder='Name' />
                <input type="submit" value="Add User" />
            </form>
            <div className='Users__list'>
                {
                    users.map(user => {
                        return (
                            <div key={user.id} className="Users__line">
                                <h2>{user.name}</h2>
                                <span onClick={() => dispatch(deleteUsers(user.id))}>&#10006;</span>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}
