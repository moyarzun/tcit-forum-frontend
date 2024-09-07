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
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700">Nombre</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700">Descripción</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-lg font-semibold text-gray-700">Acción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">{post.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{post.description}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default GetPosts