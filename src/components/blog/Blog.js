import React from 'react';
import { Link } from 'gatsby';

const Blog = ({ data }) => {
  //console.log(data);
  return (
    <div>
      <h1>Blog Posts</h1>
      {data.allContentfulBlogPost.edges.map(({ node }, index) => {
        const { title, date, body, slug } = node;
        
        return (
          <div key={index} style={{border: '1px solid green'}}>
          <h2>{title}</h2>
          <span>{date}</span>
          <p>{body.childMarkdownRemark.excerpt}</p>
          <Link to={`/blog/${slug}`}>Read More</Link>
        </div>
        )
      })}
    </div>
  );
};

export default Blog;