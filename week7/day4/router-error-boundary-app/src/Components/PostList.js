// src/Components/PostList.js
import React from 'react';
import posts from '../posts.json';

const PostList = () => {
  return (
    <div>
      <h1>Hi this is a title</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: '20px' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
