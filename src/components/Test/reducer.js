import { ADD_USER, DELETE_USER_BY_ID, GET_USERS } from './actionTypes';

export const initialStateValue = {
  posts: [],
  users: [],
}

export default function reducer(state = initialStateValue, action) {
  switch (action.type) {
    case GET_USERS: return { ...state, users: action.payload.map(user => user.name) }
    case DELETE_USER_BY_ID: return { ...state, users: state.users.toSpliced(action.payload, 1) }
    case ADD_USER: return {
      ...state,
      users: [...state.users, action.payload.user]
    }

    default: return state;
  }
}