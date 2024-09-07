import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './redux/actions'
import PostList from './components/GetPosts'
import CreatePost from './components/CreatePost'

const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json()
        dispatch(getPosts(data))
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [dispatch])

  return (
    <div>
      <CreatePost />
      <PostList posts={posts} />
    </div>
  );
};

export default App
