import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../redux/actions'

const CreatePost = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postData = {
      post: {
        name,
        description,
      },
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      dispatch(createPost({ data }))

      // Limpiar formulario tras envío
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto p-4">
      <div className="flex items-center space-x-4">
        <div className="w-1/4">
          <input
            type="text"
            value={name}
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-3/4">
          <input
            type="text"
            value={description}
            placeholder="Descripción"
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6">
            Crear
          </button>
        </div>
      </div>
    </form>
  )
}

export default CreatePost