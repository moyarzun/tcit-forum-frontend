import React from 'react'
import { useSelector } from 'react-redux'

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.name}</td>
              <td>{post.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostList