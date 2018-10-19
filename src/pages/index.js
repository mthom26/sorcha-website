import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Landing from '../components/Home/Landing';
import Bio from '../components/Home/Bio';
import UpcomingGigs from '../components/Home/UpcomingGigs';
import LandingBlogPosts from '../components/Home/LandingBlogPosts';

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Sorcha Thompson</title>
      </Helmet>
      <Landing />
      <Bio />
      <UpcomingGigs />
      <LandingBlogPosts blogPosts={data.newBlogPosts.edges} />
    </Layout>
  );
};

export default Index;

export const query = graphql`
query IndexQuery {
  newBlogPosts: allContentfulBlogPost (sort: { fields: [date], order: DESC}, limit: 3) {
    edges {
      node {
        date(formatString: "DD-MM-YYYY")
        title
        slug
        body {
          childMarkdownRemark {
             excerpt(pruneLength: 150)
         	}
        }
        coverImage {
          fluid(maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`;