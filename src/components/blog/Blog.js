import React from 'react';

const Blog = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Blog Posts</h1>
      {data.allContentfulBlogPost.edges.map((blogPost, index) => (
        <div key={index} style={{border: '1px solid green'}}>
          <h2>{blogPost.node.title}</h2>
          <span>{blogPost.node.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Blog;