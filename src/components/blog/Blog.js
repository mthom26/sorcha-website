import React from 'react';
import { Link } from 'gatsby';

import './Blog.css';
import PageHeader from '../PageHeader';

const Blog = ({ data }) => {
  //console.log(data);
  return (
    <div>
      <PageHeader title="Blog" classes="blogHeader" />
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