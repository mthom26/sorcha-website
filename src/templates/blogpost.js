import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogPost from '../components/blogPost/BlogPost';

const BlogPostPage = ({ data }) => {
  return (
    <Layout>
      <BlogPost data={data} />
    </Layout>
  );
};

export default BlogPostPage;

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
    coverImage {
      fluid(maxWidth: 1920) {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`;