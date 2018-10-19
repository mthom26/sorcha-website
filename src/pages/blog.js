import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Blog from '../components/blog/Blog';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Sorcha Thompson</title>
      </Helmet> 
      <Blog data={data} />
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
{
  allContentfulBlogPost (sort: { fields: [date], order: DESC}) {
    edges {
      node {
        title
        slug
        date(formatString: "DD-MM-YYYY")
        body {
          childMarkdownRemark {
            excerpt(pruneLength: 150)
          }
        }
        coverImage {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`;