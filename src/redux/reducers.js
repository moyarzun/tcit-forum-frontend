import { combineReducers } from 'redux'
import { ADD_POST, GET_POSTS } from './actions'

const initialPostsState = {
  posts: []
}

const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer