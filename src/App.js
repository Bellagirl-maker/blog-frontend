import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-8 mb-4">My Blog</h1>
      <PostForm onPostCreated={() => window.location.reload()} />
      <PostList />
    </div>
  );
}

export default App;
