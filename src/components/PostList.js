import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-4 space-y-6">
      {posts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">{post.body}</p>
          <p className="text-sm text-gray-500 italic">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
