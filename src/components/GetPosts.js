import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/actions'

const GetPosts = ({ posts }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Dispatch the action to remove the post from the Redux store
      dispatch(deletePost(id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
              <td><button onClick={() => handleDelete(post.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetPosts