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
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <button type="submit">Buscar</button>
        </form>
    )
}

export default FilterPost