import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import './LandingBlogPosts.css';
import { getPathPrefix } from '../../utils';

const LandingBlogPosts = ({ blogPosts, locale }) => {
  // console.log(blogPosts);
  const localePath = getPathPrefix(locale);

  return (
    <div>
      {blogPosts.map(({ node }, index) => (
        <Link to={`/${localePath}/blog/${node.slug}`} key={index}>
          <div className="landingBlogPost">
            <Img
              className="landingBlogPostImg"
              fluid={node.coverImage.fluid}
            />
            <div className="landingBlogPostContent">
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