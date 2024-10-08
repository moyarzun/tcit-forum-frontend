export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const FILTER_POSTS = 'FILTER_POSTS'

export const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts
})

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post
})

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
})

export const filterPosts = (filter) => ({
  type: 'FILTER_POSTS',
  payload: filter
})