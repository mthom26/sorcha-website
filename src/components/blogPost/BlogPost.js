import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './BlogPost.css';

const BlogPost = ({ data, pageContext }) => {
  console.log(data);
  const { title, date, body, coverImage } = data.main;
  const { next, prev } = data;
  
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

      <div className="relatedBlogPosts">
        <Link className="relatedBlogPost" to={`/blog/${prev.slug}`}>
          <Img
            style={{ height: '100%' }}
            fluid={prev.coverImage.fluid}
          />
          <div className="relatedBlogPostsContent">
            <h3>{prev.title}</h3>
            <span>{prev.date}</span>
          </div>
        </Link>
      
        <Link className="relatedBlogPost" to={`/blog/${next.slug}`}>
          <Img
            style={{ height: '100%' }}
            fluid={next.coverImage.fluid}
          />
          <div className="relatedBlogPostsContent">
            <h3>{next.title}</h3>
            <span>{next.date}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;