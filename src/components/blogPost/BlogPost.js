import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './BlogPost.css';
import { getPathPrefix } from '../../utils';

const BlogPost = ({ data, pageContext }) => {
  const { title, date, body, coverImage } = data.main;
  const { next, prev } = data;
  const locale = getPathPrefix(pageContext.locale);

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
        <Link className="relatedBlogPost" to={`/${locale}/blog/${prev.slug}`}>
          <Img
            style={{ height: '100%' }}
            fluid={prev.coverImage.fluid}
          />
          <div className="relatedBlogPostsContent prev">
            <h3>{prev.title}</h3>
            <hr />
            <span>{prev.date}</span>
          </div>
        </Link>
      
        <Link className="relatedBlogPost" to={`/${locale}/blog/${next.slug}`}>
          <Img
            style={{ height: '100%' }}
            fluid={next.coverImage.fluid}
          />
          <div className="relatedBlogPostsContent next">
            <h3>{next.title}</h3>
            <hr />
            <span>{next.date}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;