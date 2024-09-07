export const CREATE_POST = 'CREATE_POST'
export const GET_POSTS = 'GET_POSTS'

export const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts
})

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
})