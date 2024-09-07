import { combineReducers } from 'redux'
import { CREATE_POST, GET_POSTS } from './actions'

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
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.data]
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer