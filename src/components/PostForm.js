import React, { useState } from 'react';
import axios from 'axios';

function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { title, body };
      await axios.post('http://localhost:5000/posts/create', newPost);
      setTitle('');
      setBody('');
      onPostCreated();  // Refresh the post list
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}

export default PostForm;
