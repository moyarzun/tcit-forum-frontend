import React from 'react';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

const App = () => {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
};

export default App;
