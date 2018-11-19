import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './Blog.css';
import PageHeader from '../PageHeader';

const getPathPrefix = (locale) => {
  // If locale is 'en' the path should not include it
  // e.g. '/en/blog' should just return '/blog'
  if(locale === 'en') {
    return ''; //empty string
  }
  // otherwise return the locale string
  return locale;
}

const Blog = ({ data, locale }) => {
  console.log(data);
  const blogPosts = locale === 'en' ? data.englishBlogPosts : data.germanBlogPosts;
  const localePath = getPathPrefix(locale);

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
              <Link to={`/${localePath}/blog/${slug}`}>Read More</Link>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Blog;