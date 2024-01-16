import './UseReducer.scss'
import { useReducer } from 'react'
import reducer, { initialState } from './reducer';
import instance from '../axios/axios'
import { GET_POSTS, ADD_DEVELOPER, SORT_ARR, DELETE_POST, CHANGE_ID } from "./actionTypes";

export default function Users() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getPosts = () => {
    instance('posts?_limit=10')
      .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
  }

  const addDev = (e) => {
    e.preventDefault();
    const { username } = e.target;
    dispatch({ type: ADD_DEVELOPER, payload: username.value })
  }

  const sortArr = () => {
    dispatch({ type: SORT_ARR })
  }

  const deletePost = (id) => {
    dispatch({ type: DELETE_POST, payload: id })
  }

  const changeID = () => {
    dispatch({ type: CHANGE_ID })
  }

  return (
    <div className="UseReducer">

      <div className="UseReducer__arr">
        <h2>Arr: {JSON.stringify(state.arr, null, 1)}</h2>
        <button onClick={sortArr}>Sort Array</button>
      </div>

      <div className="UseReducer__form">
        <h1>Add Developers</h1>
        <form onSubmit={addDev}>
          <input type="text" name="username" id='username' placeholder='Enter Your Name' required />
          <button>Add Developer</button>
        </form>
        <ul className='UseReducer__list'>
          {
            state.developers.length > 0
              ? state.developers.map((dev, index) => {
                return <li key={index}> {dev} </li>
              })
              : <h2>No Developers Yet</h2>
          }
        </ul>
      </div>

      <div className="UseReducer__posts">
        <h1>Posts</h1>
        <div className="UseReducer__buttons">
          <button onClick={getPosts}>Get Posts</button>
          <button onClick={changeID}>Change ID</button>
        </div>
        {
          state.posts.length > 0
            ? state.posts.map(post => {
              return <div className="UseReducer__post" key={post.id}>
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