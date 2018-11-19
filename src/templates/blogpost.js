import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import BlogPost from '../components/blogPost/BlogPost';

const BlogPostPage = ({ data, pageContext }) => {
  
  const { locale } = pageContext;
  const { localeData } = locales[locale];
  const title = locale === 'en'
    ? data.mainEnglish.title
    : data.mainGerman.title;

  // Construct object based on current locale to be passed to BlogPost.js
  const localisedData = locale === 'en'
    ? {
      main: data.mainEnglish,
      prev: data.prevEnglish,
      next: data.nextEnglish
    }
    : {
      main: data.mainGerman,
      prev: data.prevGerman,
      next: data.nextGerman
    };
  
  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>{title} | Sorcha Thompson</title>
      </Helmet>
      <BlogPost data={localisedData} pageContext={pageContext} />
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
query BlogPostQuery ($slug: String!, $nextSlug: String, $prevSlug: String) {
  mainEnglish: contentfulBlogPost(node_locale: { eq: "en-US"}, slug: { eq: $slug }) {
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
  mainGerman: contentfulBlogPost(node_locale: { eq: "de"}, slug: { eq: $slug }) {
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

  prevEnglish: contentfulBlogPost(node_locale: { eq: "en-US"}, slug: { eq: $prevSlug }) {
    title
    date
    slug
    coverImage {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
  prevGerman: contentfulBlogPost(node_locale: { eq: "de"}, slug: { eq: $prevSlug }) {
    title
    date
    slug
    coverImage {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }

  nextEnglish: contentfulBlogPost(node_locale: { eq: "en-US"}, slug: { eq: $nextSlug }) {
    title
    date
    slug
    coverImage {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
  nextGerman: contentfulBlogPost(node_locale: { eq: "de"}, slug: { eq: $nextSlug }) {
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