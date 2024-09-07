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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Mensaje</button>
    </form>
  )
}

export default CreatePost