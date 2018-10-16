import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogPost from '../components/blogPost/BlogPost';

const BlogPostPage = ({ data, pathContext }) => {
  return (
    <Layout>
      <BlogPost data={data} pathContext={pathContext} />
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
query BlogPostQuery ($slug: String!, $nextSlug: String, $prevSlug: String) {
  main: contentfulBlogPost(slug: { eq: $slug }) {
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

  prev: contentfulBlogPost(slug: { eq: $prevSlug }) {
    title
    date
    slug
    coverImage {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }

  next: contentfulBlogPost(slug: { eq: $nextSlug }) {
    title
    date
    slug
    coverImage {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
}
`;