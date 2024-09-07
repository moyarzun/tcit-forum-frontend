import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPosts } from '../redux/actions'

const FilterPost = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
    
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterPosts({ name }))
  }
    
  return (
    <form onSubmit={handleSubmit} className="max-w-full mx-auto p-4">
      <div className="flex items-center justify-between space-x-4">
        <div className="w-1/4">
          <input
            type="text"
            value={name}
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-auto">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Buscar
          </button>
        </div>
      </div>
    </form>
  )
}

export default FilterPost