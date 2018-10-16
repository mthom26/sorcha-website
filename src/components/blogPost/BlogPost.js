import React from 'react';
import Img from 'gatsby-image';

import './BlogPost.css';

const BlogPost = ({ data }) => {
  const { title, date, body, coverImage } = data.contentfulBlogPost;

  return (
    <div className="blogPost">
      <div className="blogPostHeader">
        <Img
          className="blogPostImage"
          fluid={coverImage.fluid}
        />
      </div>
      <div className="blogPostContent">
        <h1>{title}</h1>
        <span>{date}</span>
        <hr />
        <div 
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
      </div>
    </div>
  );
};

export default BlogPost;