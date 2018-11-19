import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './Blog.css';
import PageHeader from '../PageHeader';

const Blog = ({ data, locale }) => {
  console.log(data);
  const blogPosts = locale === 'en' ? data.englishBlogPosts : data.germanBlogPosts;
  
  return (
    <div>
      <PageHeader title="Blog" classes="blogHeader" />
      {blogPosts.edges.map(({ node }, index) => {
        const { title, date, body, slug, coverImage } = node;
        
        return (
          <div key={index} className="blogPagePost">
            <Img
              className="blogPagePostImage"
              fluid={coverImage.fluid}
            />
            <div className="blogPagePostContent">
              <h2>{title}</h2>
              <span>{date}</span>
              <hr />
              <p>{body.childMarkdownRemark.excerpt}</p>
              <Link to={`/blog/${slug}`}>Read More</Link>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Blog;