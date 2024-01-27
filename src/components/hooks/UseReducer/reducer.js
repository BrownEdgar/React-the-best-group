import { ADD_ELEM, SAVE_POSTS, TOGGLE_LOADING } from './actionTypes'

export const initialStateValue = {
  data: [],
  count: 7,
  isloading: false
}

export default function reducer(state = initialStateValue, action) {
  switch (action.type) {
    case ADD_ELEM: return getRandom(state)
    case SAVE_POSTS: return { ...state, data: action.payload }
    case TOGGLE_LOADING: return { ...state, isloading: !state.isloading }
    default: return state
  }
}


function getRandom(state) {
  const result = []
  for (let i = 0; result.length !== 7; i++) {
    const random = Math.round(Math.random() * 1000)
    random.toString().includes(state.count) && result.push(random)
  }
  return {
    ...state,
    data: result
  }
}