import './Users.scss'
import { useReducer } from 'react'
import reducer, { initialState } from './reducer';
import instance from '../axios/axios'

export default function Users() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getPosts = () => {
    instance('posts?_limit=10')
      .then(res => dispatch({ type: 'get-posts', payload: res.data }))
  }

  const addDev = (e) => {
    e.preventDefault();
    const { username } = e.target;
    dispatch({ type: 'add-developer', payload: username.value })
  }

  const sortArr = () => {
    dispatch({ type: 'sort-arr' })
  }

  const deletePost = (id) => {
    dispatch({ type: 'delete-post', payload: id })
  }

  const changeID = () => {
    dispatch({ type: 'change-id' })
  }

  return (
    <div className="Users">

      <div className="Users__arr">
        <h2>Arr: {JSON.stringify(state.arr, null, 1)}</h2>
        <button onClick={sortArr}>Sort Array</button>
      </div>

      <div className="Users__form">
        <h1>Add Developers</h1>
        <form onSubmit={addDev}>
          <input type="text" name="username" id='username' placeholder='Enter Your Name' required />
          <button>Add Developer</button>
        </form>
        <ul className='Users__list'>
          {
            state.developers.length > 0
              ? state.developers.map((dev, index) => {
                return <li key={index}> {dev} </li>
              })
              : <h2>No Developers Yet</h2>
          }
        </ul>
      </div>

      <div className="Users__posts">
        <h1>Posts</h1>
        <div className="Users__buttons">
          <button onClick={getPosts}>Get Posts</button>
          <button onClick={changeID}>Change ID</button>
        </div>
        {
          state.posts.length > 0
            ? state.posts.map(post => {
              return <div className="Users__post" key={post.id}>
                <h3>{post.id} : {post.title}</h3>
                <p>{post.title}</p>
                <span onClick={() => deletePost(post.id)}>&#10006;</span>
              </div>
            })
            : <h2>No Posts Yet</h2>
        }
      </div>
    </div>
  )



}
