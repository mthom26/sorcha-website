import React from 'react';
import Img from 'gatsby-image';

import { Link } from 'gatsby';

import './LandingBlogPosts.css';

const LandingBlogPosts = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <div>
      <h2>BlogPosts</h2>
      {blogPosts.map(({ node }, index) => (
        <Link to={`/blog/${node.slug}`} key={index}>
          <div className="landingBlogPost">
            <Img
              className="landingBlogPostImg"
              fluid={node.coverImage.fluid}
            />
            <div className="landingBlogPostContent removeAnchorStyling">
              <div className="landingBlogPostContentCon">
                <h3>{node.title}</h3>
                <span>{node.date}</span>
                <p>{node.body.childMarkdownRemark.excerpt}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LandingBlogPosts;