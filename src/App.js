import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './redux/actions'
import GetPosts from './components/GetPosts'
import CreatePost from './components/CreatePost'
import FilterPost from './components/FilterPost'

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
    <div className="max-w-4xl mx-auto p-4">
      <FilterPost />
      <GetPosts posts={posts} />
      <CreatePost />
    </div>
  );
};

export default App
