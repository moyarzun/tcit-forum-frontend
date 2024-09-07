import { combineReducers } from 'redux'
import { GET_POSTS, CREATE_POST, DELETE_POST, FILTER_POSTS } from './actions'

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
    case FILTER_POSTS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.name.includes(action.payload.name))
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer