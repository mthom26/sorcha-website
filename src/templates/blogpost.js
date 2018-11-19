import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import BlogPost from '../components/blogPost/BlogPost';

// !! Need to make sure the pageContext contains locales and other data !!
const BlogPostPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];

  return (
    <Layout>
      <Helmet>
        <title>{data.main.title} | Sorcha Thompson</title>
      </Helmet>
      <BlogPost data={data} pageContext={pageContext} />
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