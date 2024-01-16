import { GET_POSTS, ADD_DEVELOPER, SORT_ARR, DELETE_POST, CHANGE_ID } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: return {
      ...state,
      posts: action.payload,
      actions: state.actions + 1
    };
    case ADD_DEVELOPER: return {
      ...state,
      developers: [...state.developers, action.payload],
      actions: state.actions + 1
    };
    case SORT_ARR: return {
      ...state,
      arr: state.arr.toSorted((a, b) => a - b),
      actions: state.actions + 1
    };
    case DELETE_POST: return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.payload),
      actions: state.actions + 1
    }
    case CHANGE_ID: return {
      ...state,
      posts: state.posts.map((post, index) => {
        return {
          ...post,
          id: state.arr[index]
        }
      }),
      actions: state.actions + 1
    }
    default: return state;
  }
}
