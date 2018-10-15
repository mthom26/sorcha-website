import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Blog from '../components/blog/Blog';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div style={{height: '300px', border: '1px solid red'}}>
        <h1>Blog Header</h1>
      </div>
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
      }
    }
  }
}
`;