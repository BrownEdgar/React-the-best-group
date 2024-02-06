import './Users.scss'
import { addUser, deleteUser, } from '../../features/users/usersSlice';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux'


export default function Users() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  const addUserForm = (e) => {
    e.preventDefault();
    const { name } = e.target
    dispatch(addUser({ name: name.value }))
    e.target.reset();
  }

  return (
    <div className="Users">
      <h1>Add Users</h1>
      <form className='Users__form'
        onSubmit={addUserForm}>
        <input type="text" placeholder='Username' name='name' required />
        <input type="submit" value="Add User" />
      </form>

      <div className="Users__list">
        {users.map(user => {
          return <div key={user.id} className="Users__user">
            <p> {user.name} </p>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </div>

        })}
      </div>
    </div>
  )
}
