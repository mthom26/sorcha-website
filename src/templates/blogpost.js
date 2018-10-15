import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div style={{height: '200px'}} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <span>{data.contentfulBlogPost.date}</span>
      <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html}} />

    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
query BlogPostQuery ($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    date
    body {
      childMarkdownRemark {
        html
      }
    }
  }
}
`;