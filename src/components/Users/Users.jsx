import { useEffect, useState } from "react";
import './Users.scss';
import instance from "../axios/axios";
export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        instance('users?_limit=6')
            .then(res => setUsers(res.data))
        return () => {
            console.log('haylur');
        }
    }, [])

    const deleteUser = (id) => {
        setUsers(prevUsers => {
            return prevUsers.filter(user => user.id !== id)
        })
    }
    const [active, setActive] = useState(null);
    const handleClick = (id) => {
        id === active ? setActive(0) : setActive(id);
    }

    return (
        <div className="Users">
            {
                users.map(user => {
                    return (
                        <div onClick={() => handleClick(user.id)}
                            className={`Users__box ${user.id === active ? 'active' : ''}`}
                            key={user.id}>
                            <h2>{user.username}</h2>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                           
                            <button 
                            disabled={user.id !== active}
                            onClick={() => deleteUser(user.id)}
                            class="button-82-pushable" role="button">
                                <span class="button-82-shadow"></span>
                                <span class="button-82-edge"></span>
                                <span class="button-82-front text">
                                    No Please <i className="bi bi-x-lg"></i>
                                </span>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
