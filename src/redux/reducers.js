import { combineReducers } from 'redux'
import { GET_POSTS, CREATE_POST, DELETE_POST } from './actions'

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
      console.log('CREATE')
      return {
        ...state,
        posts: [...state.posts, action.payload.data]
      }
    case DELETE_POST:
      console.log('DELETE')
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  posts: postsReducer
})

export default rootReducer